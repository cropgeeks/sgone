<template>
  <div>
    <b-jumbotron>
      <b-row>
        <b-col cols=12 sm=4 class="text-center text-sm-right" order="1" order-sm="2">
          <b-img fluid src="img/logo.svg" />
        </b-col>
        <b-col cols=12 sm=8 order="2" order-sm="1">
          <h1 class="display-3 text-center text-sm-left">SGONE</h1>
          <p class="lead text-center text-sm-left">Easily identify possible duplicates in your data.</p>
        </b-col>
      </b-row>
    </b-jumbotron>
    <template v-if="supportsWorker">
      <b-dropdown text="Import" class="mb-3">
        <b-dropdown-item @click="$refs.germinateModal.show()">From Germinate</b-dropdown-item>
      </b-dropdown>

      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Input" label-for="input">
          <b-form-textarea id="input" :rows="6" v-model="input"/>
        </b-form-group>

        <b-row>
          <b-col cols=12 sm=6>
            <b-form-group label="Id column" label-for="id-column">
              <b-form-select :options="columnOptions" v-model="idColumn">
                <template #first>
                  <b-form-select-option :value="null" disabled id="id-column">-- Please select the id column --</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols=12 sm=6>
            <b-form-group label="Name column" label-for="name-column">
              <b-form-select :options="columnOptions" v-model="nameColumn">
                <template #first>
                  <b-form-select-option :value="null" disabled id="name-column">-- Please select the name column --</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-progress :value="progress" variant="info" striped animated v-if="progress" class="mb-3" />

        <b-button type="submit" :disabled="!input || !idColumn" v-if="progress === 0">Go!</b-button>
        <b-button v-else @click.prevent="cancel">Cancel</b-button>
      </b-form>

      <b-card no-body v-if="duplicates && duplicates.length > 0" class="mt-3">
        <b-tabs card content-class="mt-3" v-model="tabIndex" @changed="updateIndex" no-fade>
          <b-tab v-for="(dup, index) in duplicates" :key="dup.uuid">
            <template #title>
              Results <button type="button" aria-label="Close" class="close ml-2" @click.stop="deleteTab(index)">×</button>
            </template>

            <Results :duplicates="dup" />
          </b-tab>
        </b-tabs>
      </b-card>
    </template>
    <h1 v-else>Please use a browser that supports Web Workers</h1>

    <GerminateModal ref="germinateModal" @data-loaded="setGerminateData" />
  </div>
</template>

<script>
import GerminateModal from '@/components/modals/GerminateModal'
import Results from '@/components/Results'

export default {
  components: {
    GerminateModal,
    Results
  },
  data: function () {
    return {
      input: null,
      progress: 0,
      tabIndex: 0,
      duplicates: [],
      headers: null,
      idColumn: null,
      nameColumn: null
    }
  },
  computed: {
    supportsWorker: function () {
      return window.Worker
    },
    columnOptions: function () {
      if (this.headers) {
        return this.headers.map(h => {
          return {
            value: h,
            text: h
          }
        })
      } else {
        return null
      }
    }
  },
  watch: {
    input: function (newValue) {
      if (newValue) {
        this.headers = newValue.split(/\r?\n/)[0].split('\t')
        this.idColumn = this.headers.includes('id') ? 'id' : this.headers[0]
        this.nameColumn = this.headers.includes('name') ? 'name' : this.headers[0]
      } else {
        this.headers = null
        this.idColumn = null
        this.nameColumn = null
      }
    }
  },
  methods: {
    download: function (index) {
      const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.duplicates[index].duplicates))}`
      const a = document.createElement('a')
      a.href = dataString
      a.download = 'sgone.json'
      a.click()
    },
    updateIndex: function (currentTabs, prevTabs) {
      if (currentTabs.length >= prevTabs.length) {
        this.tabIndex = currentTabs.length - 1
      }
    },
    deleteTab: function (index) {
      this.duplicates.splice(index, 1)
    },
    setGerminateData: function (data) {
      this.input = data
    },
    cancel: function () {
      if (this.worker) {
        this.worker.terminate()
        this.progress = 0
      }
    },
    onSubmit: function () {
      this.progress = 0

      this.worker = new Worker('./levenshtein.worker.js')

      const start = Date.now()

      this.worker.postMessage({
        data: this.input.split(/\r?\n/),
        idColumn: this.idColumn,
        nameColumn: this.nameColumn
      })

      this.worker.onmessage = e => {
        if (e.data) {
          if (e.data.progress) {
            this.progress = e.data.progress
          } else if (e.data.duplicates) {
            const end = Date.now()

            this.duplicates.push({
              uuid: this.uuidv4(),
              duplicates: e.data.duplicates,
              runtime: Math.ceil((end - start) / 1000)
            })

            this.progress = 0
          }
        }
      }
    },
    /**
     * Generates a v4 UUID
     */
    uuidv4: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
  },
  mounted: function () {
    if (this.$route.query && this.$route.query.germinateUrl) {
      this.$refs.germinateModal.show(this.$route.query.germinateUrl)
    }
  }
}
</script>

<style>
.nav.nav-tabs .close {
  font-size: 1.2rem;
}
.jumbotron img {
  max-height: 120px;
}
</style>
