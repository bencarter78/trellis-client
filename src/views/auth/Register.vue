<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
    <h1 class="title is-3">Register</h1>

    <div class="notification is-danger" v-if="errors">
      <ul>
        <li v-for="e of errors">
          <i class="fa fa-exclamation-triangle"></i>
          {{ e[0] }}
        </li>
      </ul>
    </div>

    <form @submit.prevent="register">
      <trellis-text-field
        name="name"
        ref="name"
        label="Name"
        classes="has-margin-bottom-md">
      </trellis-text-field>

      <trellis-text-field
        name="email"
        ref="email"
        label="Email"
        classes="has-margin-bottom-md">
      </trellis-text-field>

      <trellis-text-field
        name="password"
        type="password"
        ref="password"
        label="Password"
        classes="has-margin-bottom-md">
      </trellis-text-field>

      <trellis-text-field
        name="password_confirmation"
        type="password"
        ref="password_confirmation"
        label="Confirm Password"
        classes="has-margin-bottom-md">
      </trellis-text-field>

      <div class="field is-grouped">
        <p class="control">
          <button
            class="button is-primary"
            v-bind:class="isLoading ? 'is-loading' : ''">
            Register
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
        isLoading: false,
        errors: ''
      }
    },

    methods: {
      register (e) {
        this.isLoading = true

        new Client()
          .request({
            method: 'post',
            url: '/register',
            data: {
              name: document.getElementById('name').value,
              email: document.getElementById('email').value,
              password: document.getElementById('password').value,
              password_confirmation: document.getElementById('password_confirmation').value
            }
          })
          .then((res) => {
            this.isLoading = false
            localStorage._token = res.data.data.token
            this.$router.push('/dashboard')
          })
          .catch(err => {
            this.errors = err.response.data
            this.isLoading = false
          })
      }
    }
  }
</script>
