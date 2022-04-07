<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary" id="main-navigation">
      <b-navbar-brand :to="{ name: 'home' }" class="d-flex align-items-center">
        <img src="img/logo.svg" height="40px" class="d-inline-block align-top mr-3" alt="SGONE">
        SGONE
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>

    <!-- The main content -->
    <b-container class="my-4">
      <router-view :key="$route.path" />
    </b-container>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';
@import '~bootswatch/dist/sandstone/bootswatch';
</style>
