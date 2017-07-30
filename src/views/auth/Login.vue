<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title is-3">Sign In</h1>

      <form @submit.prevent="login">
        <trellis-text-field name="email" ref="email" label="Email" ></trellis-text-field>
        <trellis-text-field name="password" type="password" ref="password" label="Password"></trellis-text-field>

        <div class="field is-grouped">
          <p class="control">
            <button
              class="button is-primary"
              v-bind:class="isLoading ? 'is-loading' : ''">
              Sign In
            </button>
          </p>
          <p class="control">
            <button class="button is-link">Forgot Password</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        isLoading: false
      }
    },

    methods: {
      login (e) {
        this.isLoading = true
        new Client()
          .request({
            method: 'post',
            url: 'login',
            data: {
              email: document.getElementById('email').value,
              password: document.getElementById('password').value
            }
          })
          .then((res) => {
            localStorage._token = res.data.data.token
            this.$router.push('/dashboard')
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>
