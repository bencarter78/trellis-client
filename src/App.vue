<template>
  <div id="app">
    <div class="container">
      <header class="has-margin-bottom-md">
        <nav-main></nav-main>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" src="./assets/sass/app.scss"></style>
