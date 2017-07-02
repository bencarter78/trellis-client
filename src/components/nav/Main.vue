<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="./../../assets/img/logo.png" alt="Trellis logo">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
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
      <a class="nav-item">Dashboard</a>
      <a class="nav-item">Projects</a>
      <a class="nav-item">Blog</a>

      <div class="nav-item">
        <p class="control">
          <span class="button">
            <router-link :to="{path: '/login'}">
              <span>Sign In</span>
            </router-link>
          </span>
        </p>
      </div>

      <div class="nav-item">
        <p class="control">
          <a class="button is-primary">
            <span>Sign Up</span>
          </a>
        </p>
      </div>
    </div>
  </nav>
</template>
