<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="./../../assets/img/logo.png" alt="Trellis logo">
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <router-link :to="{name: 'dashboard'}" class="nav-item">
        Dashboard
      </router-link>
      <router-link :to="{name: 'projects.index'}" class="nav-item">
        Projects
      </router-link>

      <div class="nav-item">
        <p class="control">
          <span class="button">
            <router-link :to="{path: '/login'}" v-if="!loggedIn">
              <span>Sign In</span>
            </router-link>

            <span v-if="loggedIn" @click="$router.push({name: 'logout'})">
              Sign Out
            </span>
          </span>
        </p>
      </div>

      <div class="nav-item" v-if="!loggedIn">
        <p class="control">
          <a class="button is-primary">
            <span>Sign Up</span>
          </a>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['loggedIn']
  }
</script>
