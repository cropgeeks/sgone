<template>
  <div>
    <b-jumbotron>
      <b-row>
        <b-col cols=12 sm=4 class="text-center text-sm-right" order="1" order-sm="2">
          <b-img fluid src="img/logo.svg" />
        </b-col>
        <b-col cols=12 sm=8 order="2" order-sm="1">
          <h1 class="display-3 text-center text-sm-left">SGONE</h1>
          <p class="lead text-center text-sm-left">{{ $t('jumbotronLead') }}</p>
        </b-col>
      </b-row>
    </b-jumbotron>

    <h1>{{ $t('pageTitleAbout') }}</h1>
    <div v-html="$t('pageHtmlAbout')" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
