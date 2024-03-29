<template>
  <b-modal :title="$t('modalTitleImportGerminate')"
           :ok-title="$t('buttonImport')"
           :ok-disabled="!canContinue"
           :cancel-title="$t('buttonCancel')"
           @ok.prevent="onSubmit"
           ref="germinateModal">
    <p>{{ $t('modalTextImportGerminate') }}</p>
    <b-form @submit.prevent="onSubmit">
      <b-form-radio-group v-model="importType" buttons :options="importTypeOptions" button-variant="outline-secondary" class="mb-3" />
      <b-form-group :label="$t('formLabelGerminateUrl')" label-for="url" :description="$t('formDescriptionGerminateUrl')">
        <b-form-input id="url" v-model="url" />
      </b-form-group>

      <b-form-group :label="$t('formLabelGerminateRequiresCredentials')" label-for="credentials" :description="$t('formDescriptionGerminateRequiresCredentials')">
        <b-form-radio-group v-model="needsCredentials" buttons :options="credentialOptions" button-variant="outline-secondary" class="mb-3" id="credentials" />
      </b-form-group>

      <template v-if="needsCredentials">
        <b-form-group :label="$t('formLabelUsername')" label-for="username" :description="$t('formDescriptionUsername')">
          <b-form-input id="username" v-model="username" />
        </b-form-group>
        <b-form-group :label="$t('formLabelPassword')" label-for="password" :description="$t('formDescriptionPassword')">
          <b-form-input id="password" type="password" v-model="password" />
        </b-form-group>
      </template>
    </b-form>
  </b-modal>
</template>

<script>
const axios = require('axios').default

export default {
  data: function () {
    return {
      username: null,
      password: null,
      needsCredentials: false,
      url: null,
      token: null,
      importType: 'germplasm'
    }
  },
  computed: {
    canContinue: function () {
      return this.url && (this.needsCredentials ? (this.username !== null && this.password !== null) : true)
    },
    credentialOptions: function () {
      return [{ text: this.$t('genericYes'), value: true }, { text: this.$t('genericNo'), value: false }]
    },
    importTypeOptions: function () {
      return [{ text: this.$t('formSelectOptionGermplasm'), value: 'germplasm' }, { text: this.$t('formSelectOptionTraits'), value: 'traits' }]
    }
  },
  methods: {
    /**
     * Shows and resets modal dialog
     */
    show: function (germinateUrl) {
      this.username = null
      this.password = null
      this.needsCredentials = false
      this.token = null
      this.url = germinateUrl
      this.importType = 'germplasm'

      this.$refs.germinateModal.show()
    },
    /**
     * Hides the modal dialog
     */
    hide: function () {
      this.$nextTick(() => this.$refs.germinateModal.hide())
    },
    onSubmit: function () {
      if (this.needsCredentials) {
        this.getToken()
      } else {
        this.getData()
      }
    },
    getToken: function () {
      axios({
        baseURL: this.url,
        url: 'api/token',
        method: 'post',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(result => {
        if (result && result.data && result.data.token) {
          this.token = result.data.token
          this.getData()
        } else {
          // TODO: Error handling
        }
      })
    },
    getData: function () {
      const config = {
        baseURL: this.url,
        url: this.importType === 'germplasm' ? 'api/germplasm/table' : 'api/trait/table',
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        data: {
          page: 0,
          limit: 2147483647
        }
      }

      if (this.token) {
        config.withCredentials = true
        config.headers.Authorization = `Bearer ${this.token}`
      }

      axios(config).then(result => {
        if (result && result.data && result.data.data) {
          let ds = 'id\tname\n'
          result.data.data.forEach(g => {
            if (this.importType === 'germplasm') {
              ds += `${g.germplasmId}\t${g.germplasmName}\n`
            } else {
              ds += `${g.traitId}\t${g.traitName}\n`
            }
          })
          this.$emit('data-loaded', ds)

          this.hide()
        } else {
          // TODO: Error handling
        }
      })
    }
  }
}
</script>

<style>

</style>
