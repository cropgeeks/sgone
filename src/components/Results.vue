<template>
  <div v-if="duplicates.duplicates && duplicates.duplicates.length > 0">
    <p>{{ duplicates.duplicates.length }} possible duplicates have been found<template v-if="duplicates.runtime"> in {{ duplicates.runtime }} seconds</template>.</p>

    <b-button class="mb-3" @click="download(index)">Download</b-button>

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
      currentPage: 1,
      columns: [
        { key: 'type', sortable: true, label: 'Match type' },
        { key: 'one.id', sortable: true },
        { key: 'one.name', sortable: true },
        { key: 'two.id', sortable: true },
        { key: 'two.name', sortable: true }
      ]
    }
  }
}
</script>

<style>

</style>
