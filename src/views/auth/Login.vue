<template>
  <div class="column is-half is-offset-one-quarter">
    <h1 class="title is-3">Sign In</h1>

    <form @submit.prevent="login">
      <text-field name="email" ref="email" label="Email" classes="has-margin-bottom-md"></text-field>
      <text-field name="password" type="password" ref="password" label="Password" classes="has-margin-bottom-md"></text-field>

      <div class="field is-grouped">
        <p class="control">
          <button
            class="button is-primary">
            Sign In
          </button>
        </p>
        <p class="control">
          <button class="button is-link">Forgot Password</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  const config = require('./../../../config/dev.env')

  export default {
    data () {
      return {
        isLoading: false
      }
    },

    methods: {
      login (e) {
        this.isLoading = true
        window.axios
          .post(config.TRELLIS_SERVER_URL + '/login', {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    }
  }
</script>
