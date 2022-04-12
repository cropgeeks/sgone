<template>
  <b-container class="mt-3">
    <b-jumbotron>
      <b-row>
        <b-col cols=12 sm=4 class="text-center text-sm-right" order="1" order-sm="2">
          <b-img fluid src="img/logo.svg" alt="SGONE logo" />
        </b-col>
        <b-col cols=12 sm=8 order="2" order-sm="1">
          <h1 class="display-3 text-center text-sm-left">SGONE</h1>
          <p class="lead text-center text-sm-left">{{ $t('jumbotronLead') }}</p>
        </b-col>
      </b-row>
    </b-jumbotron>
    <template v-if="supportsWorker">
      <b-dropdown :text="$t('buttonImport')" class="mb-3">
        <b-dropdown-item @click="$refs.germinateModal.show()">{{ $t('buttonImportFromGerminate') }}</b-dropdown-item>
      </b-dropdown>

      <b-form @submit.prevent="onSubmit">
        <b-form-group label-for="input">
          <template v-slot:label>
            <span>{{ $t('formLabelInput') }} </span><BIconQuestionCircle id="input-help" />
            <b-popover target="input-help" triggers="hover" placement="bottom">
              <template #title>{{ $t('popoverTitleInput') }}</template>
              <div v-html="$t('popoverHtmlInput')" />
            </b-popover>
          </template>
          <b-form-textarea id="input" @keydown.tab.prevent="tabber($event)" :rows="6" v-model="input"/>
        </b-form-group>

        <b-row>
          <b-col cols=12 sm=6>
            <b-form-group :label="$t('formLabelIdColumn')" label-for="id-column">
              <b-form-select :options="columnOptions" v-model="idColumn">
                <template #first>
                  <b-form-select-option :value="null" disabled id="id-column">{{ $t('formDropdownPlaceholderIdColumn') }}</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols=12 sm=6>
            <b-form-group :label="$t('formLabelNameColumn')" label-for="name-column">
              <b-form-select :options="columnOptions" v-model="nameColumn">
                <template #first>
                  <b-form-select-option :value="null" disabled id="name-column">{{ $t('formDropdownPlaceholderNameColumn') }}</b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <template v-if="progress">
          <b-progress :value="progress.done / progress.total * 100" variant="info" striped animated />
          <p><template v-if="progress.done">{{ $tc('progressInfoComparisons', progress.done, { count: `${progress.done.toLocaleString()} / ${progress.total.toLocaleString()}` }) }} {{ $tc('progressInfoDuplicates', progress.duplicateCount, { count: progress.duplicateCount.toLocaleString() }) }}</template></p>
        </template>

        <b-button type="submit" :disabled="!input || !idColumn" v-if="progress === null">{{ $t('buttonGo') }}</b-button>
        <b-button v-else @click.prevent="cancel">{{ $t('buttonCancel') }}</b-button>
      </b-form>

      <b-card no-body v-if="duplicates && duplicates.length > 0" class="mt-3">
        <b-tabs card content-class="mt-3" v-model="tabIndex" @changed="updateIndex" no-fade>
          <b-tab v-for="(dup, index) in duplicates" :key="dup.uuid">
            <template #title>
              {{ $t('tabTitleResults') }} <button type="button" aria-label="Close" class="close ml-2" @click.stop="deleteTab(index)">×</button>
            </template>

            <Results :duplicates="dup" />
          </b-tab>
        </b-tabs>
      </b-card>
    </template>
    <h1 v-else>Please use a browser that supports Web Workers</h1>

    <GerminateModal ref="germinateModal" @data-loaded="setGerminateData" />
  </b-container>
</template>

<script>
import GerminateModal from '@/components/modals/GerminateModal'
import Results from '@/components/Results'

import { BIconQuestionCircle } from 'bootstrap-vue'

export default {
  components: {
    BIconQuestionCircle,
    GerminateModal,
    Results
  },
  data: function () {
    return {
      input: null,
      progress: null,
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
    tabber: function (event) {
      const text = this.input
      const originalSelectionStart = event.target.selectionStart
      const textStart = text.slice(0, originalSelectionStart)
      const textEnd = text.slice(originalSelectionStart)

      this.input = `${textStart}\t${textEnd}`
      event.target.value = this.varieties // required to make the cursor stay in place.
      event.target.selectionEnd = event.target.selectionStart = originalSelectionStart + 1
    },
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
        this.progress = null
      }
    },
    onSubmit: function () {
      this.progress = {
        running: false,
        done: 0,
        total: 1,
        duplicateCount: 0
      }

      this.worker = new Worker('./levenshtein.worker.js')

      const start = Date.now()

      this.worker.postMessage({
        data: this.input.split(/\r?\n/),
        idColumn: this.idColumn,
        nameColumn: this.nameColumn
      })

      this.worker.onmessage = e => {
        if (e.data) {
          if (e.data.running) {
            this.progress = e.data
          } else {
            const end = Date.now()

            const dup = e.data.duplicates

            dup.forEach(d => {
              Object.freeze(d)
            })

            Object.freeze(dup)

            const newData = {
              uuid: this.uuidv4(),
              duplicates: dup,
              runtime: Math.ceil((end - start) / 1000),
              total: e.data.total
            }

            Object.freeze(newData)

            this.duplicates.push(newData)

            this.progress = null
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
</style>
