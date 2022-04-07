<template>
  <div>
    <p>{{ duplicates.duplicates.length }} possible duplicates have been found<template v-if="duplicates.runtime"> in {{ duplicates.runtime }} seconds</template>.</p>

    <b-button class="mb-3" @click="download(index)">Download</b-button>

    <b-table :items="duplicates.duplicates" :fields="columns" responsive striped hover>
      <template #cell(type)="data">
        <b-badge :variant="data.value === 'exact' ? 'success' : 'warning'">{{ data.value }}</b-badge>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    duplicates: {
      type: Object,
      default: () => []
    }
  },
  data: function () {
    return {
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
