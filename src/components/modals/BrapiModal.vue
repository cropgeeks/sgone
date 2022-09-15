<template>
  <b-modal :title="$t('modalTitleImportBrapi')"
           :ok-title="$t('buttonImport')"
           :ok-disabled="!canContinue"
           :cancel-title="$t('buttonCancel')"
           @ok.prevent="onSubmit"
           ref="brapiModal">
    <p>{{ $t('modalTextImportBrapi') }}</p>
    <b-form @submit.prevent="onSubmit">
      <b-form-group :label="$t('formLabelBrapiUrl')" label-for="url" :description="$t('formDescriptionBrapiUrl')">
        <b-form-input id="url" v-model="url" />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { brapiGetGermplasm } from '@/plugins/brapi'

export default {
  data: function () {
    return {
      url: null
    }
  },
  computed: {
    canContinue: function () {
      return this.url
    }
  },
  methods: {
    /**
     * Shows and resets modal dialog
     */
    show: function (brapiUrl) {
      this.url = brapiUrl

      this.$refs.brapiModal.show()
    },
    /**
     * Hides the modal dialog
     */
    hide: function () {
      this.$nextTick(() => this.$refs.brapiModal.hide())
    },
    onSubmit: function () {
      this.getData()
    },
    getData: function () {
      brapiGetGermplasm(this.url)
        .then(germplasm => {
          let ds = 'id\tname\n'
          germplasm.forEach(g => {
            ds += `${g.germplasmDbId}\t${g.germplasmName}\n`
          })
          this.$emit('data-loaded', ds)

          this.hide()
        })
    }
  }
}
</script>

<style>

</style>
