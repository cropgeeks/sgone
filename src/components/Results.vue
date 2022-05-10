<template>
  <div v-if="duplicates.duplicates && duplicates.duplicates.length > 0">
    <p v-html="$tc('resultsInfoDuplicates', duplicates.duplicates.length, { count: duplicates.duplicates.length.toLocaleString() })" />
    <p v-if="duplicates.runtime" v-html="$tc('resultsInfoRuntime', duplicates.runtime, { count: duplicates.runtime.toLocaleString() })" />
    <p v-if="duplicates.total" v-html="$tc('resultsInfoComparisons', duplicates.total, { count: duplicates.total.toLocaleString() })" />

    <b-button class="mb-3" @click="downloadDuplicates"><BIconDownload /> {{ $t('buttonDownload') }}</b-button>

    <div class="mb-3">
      <b-button @click="group" :disabled="!duplicates || !duplicates.duplicates" v-if="progress === null"><BIconDiagram3 :rotate="90" /> {{ $t('buttonGroupResults') }}</b-button>
      <b-button v-else @click.prevent="cancel">{{ $t('buttonCancel') }}</b-button>
    </div>

    <template v-if="progress">
      <b-progress :value="progress.done / progress.total * 100" variant="info" striped animated />
    </template>

    <h2>{{ $t('pageTitleDuplicates') }}</h2>
    <p v-html="$t('pageTextDuplicates')" />

    <b-table :items="duplicates.duplicates"
             :fields="duplicateColumns"
             :per-page="100"
             :current-page="duplicateCurrentPage"
             responsive striped hover>
      <template #cell(type)="data">
        <b-badge :variant="data.value === 'exact' ? 'success' : 'warning'">{{ data.value }}</b-badge>
      </template>
    </b-table>

    <b-pagination
      v-model="duplicateCurrentPage"
      :total-rows="duplicates.duplicates.length"
      :per-page="100"
      v-if="duplicates.duplicates.length > 100" />

    <template v-if="joined">
      <h2 ref="joinedSection">{{ $t('pageTitleJoined') }}</h2>
      <p v-html="$t('pageTextJoined')" />
      <b-table :items="joined"
               :fields="joinedColumns"
               :per-page="100"
               :current-page="joinedCurrentPage"
               responsive striped hover>
        <template #head(checked)>
          <b-form-checkbox :checked="allSelected" @change="onSelectionHeaderClicked"/>
        </template>
        <template #cell(checked)="data">
          <b-form-checkbox :value="data.index" v-model="selectedItems" />
        </template>
        <template #cell(preferred)="data">
          <b-badge href="#" @click.prevent="selectRow(data.index)" variant="success">{{ data.item.preferred.name }}</b-badge>
        </template>
        <template #cell(others)="data">
          <b-badge href="#" @click.prevent="swapPreferred(data.index, index)" variant="info" class="mr-2" v-for="(other, index) in data.item.others" :key="`other-${other.id}`">{{ other.name }}</b-badge>
        </template>
      </b-table>

      <b-pagination
        v-model="joinedCurrentPage"
        :total-rows="joined.length"
        :per-page="100"
        v-if="joined.length > 100" />

      <b-button :disabled="!selectedItems || selectedItems.length < 1" @click="downloadGrouped"><BIconDownload /> {{ $t('buttonExportGrouped') }}</b-button>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import { BIconDownload, BIconDiagram3 } from 'bootstrap-vue'

export default {
  components: {
    BIconDownload,
    BIconDiagram3
  },
  props: {
    duplicates: {
      type: Object,
      default: () => {
        return { duplicates: [] }
      }
    }
  },
  data: function () {
    return {
      duplicateCurrentPage: 1,
      joinedCurrentPage: 1,
      joinerWorker: null,
      joined: null,
      progress: null,
      selectedItems: []
    }
  },
  computed: {
    duplicateColumns: function () {
      return [
        { key: 'type', sortable: true, label: this.$t('tableColumnDuplicateType') },
        { key: 'one.id', sortable: true, label: this.$t('tableColumnOneId') },
        { key: 'one.name', sortable: true, label: this.$t('tableColumnOneName') },
        { key: 'two.id', sortable: true, label: this.$t('tableColumnTwoId') },
        { key: 'two.name', sortable: true, label: this.$t('tableColumnTwoName') }
      ]
    },
    joinedColumns: function () {
      return [
        { key: 'checked', sortable: false, label: '' },
        { key: 'preferred', sortable: false, label: this.$t('tableColumnPreferred') },
        { key: 'others', sortable: false, label: this.$t('tableColumnOthers') }
      ]
    },
    allSelected: function () {
      return this.selectedItems.length > 0 && this.selectedItems.length === this.joined.length
    }
  },
  methods: {
    onSelectionHeaderClicked: function (value) {
      if (value) {
        this.selectedItems = this.joined.map((d, i) => i)
      } else {
        this.selectedItems = []
      }
    },
    selectRow: function (index) {
      if (!this.selectedItems.includes(index)) {
        this.selectedItems.push(index)
      }
    },
    swapPreferred: function (rowIndex, itemIndex) {
      const row = JSON.parse(JSON.stringify(this.joined[rowIndex]))

      const temp = row.preferred
      row.preferred = row.others.splice(itemIndex, 1)[0]
      row.others.push(temp)
      Vue.set(this.joined, rowIndex, row)

      this.selectRow(rowIndex)
    },
    cancel: function () {
      if (this.joinerWorker) {
        this.joinerWorker.terminate()
        this.progress = null
      }
    },
    group: function () {
      this.progress = {
        running: false,
        done: 0,
        total: 1
      }

      this.joinerWorker = new Worker('./joiner.worker.js')

      this.joinerWorker.postMessage({
        data: this.duplicates.duplicates
      })

      this.joinerWorker.onmessage = e => {
        if (e.data) {
          if (e.data.running) {
            this.progress = e.data
          } else {
            const dup = e.data.duplicates

            this.selectedItems = []
            this.joined = dup.map(d => {
              return {
                checked: false,
                preferred: d.shift(),
                others: d
              }
            })

            this.progress = null

            this.$nextTick(() => {
              if (this.$refs.joinedSection) {
                this.$refs.joinedSection.scrollIntoView({ behavior: 'smooth' })
              }
            })
          }
        }
      }
    },
    downloadDuplicates: function () {
      const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.duplicates.duplicates))}`
      const a = document.createElement('a')
      a.href = dataString
      a.download = 'sgone.json'
      a.click()
    },
    downloadGrouped: function () {
      const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.selectedItems.map(i => {
        const result = JSON.parse(JSON.stringify(this.joined[i]))
        delete result.checked
        return result
      })))}`
      const a = document.createElement('a')
      a.href = dataString
      a.download = 'sgone-grouped.json'
      a.click()
    }
  }
}
</script>

<style>

</style>
