<template>
  <div id="app">
    <div class="container">
      <header class="has-margin-bottom-md">
        <trellis-nav-main :loggedIn="auth.check()"></trellis-nav-main>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Auth from './middleware/auth'

  export default {
    name: 'app',

    data () {
      return {
        auth: Auth
      }
    }
  }
</script>

<style lang="scss" src="./assets/sass/app.scss"></style>
