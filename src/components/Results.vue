<template>
  <div v-if="duplicates.duplicates && duplicates.duplicates.length > 0">
    <p v-html="$tc('resultsInfoDuplicates', duplicates.duplicates.length, { count: duplicates.duplicates.length.toLocaleString() })" />
    <p v-if="duplicates.runtime" v-html="$tc('resultsInfoRuntime', duplicates.runtime, { count: duplicates.runtime.toLocaleString() })" />
    <p v-if="duplicates.total" v-html="$tc('resultsInfoComparisons', duplicates.total, { count: duplicates.total.toLocaleString() })" />

    <b-button class="mb-3" @click="download(index)">{{ $t('buttonDownload') }}</b-button>

    <b-table :items="duplicates.duplicates"
             :fields="columns"
             :per-page="100"
             :current-page="currentPage"
             responsive striped hover>
      <template #cell(type)="data">
        <b-badge :variant="data.value === 'exact' ? 'success' : 'warning'">{{ data.value }}</b-badge>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="duplicates.duplicates.length"
      :per-page="100" />
  </div>
</template>

<script>
export default {
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
      currentPage: 1
    }
  },
  computed: {
    columns: function () {
      return [
        { key: 'type', sortable: true, label: this.$t('tableColumnDuplicateType') },
        { key: 'one.id', sortable: true, label: this.$t('tableColumnOneId') },
        { key: 'one.name', sortable: true, label: this.$t('tableColumnOneName') },
        { key: 'two.id', sortable: true, label: this.$t('tableColumnTwoId') },
        { key: 'two.name', sortable: true, label: this.$t('tableColumnTwoName') }
      ]
    }
  }
}
</script>

<style>

</style>
