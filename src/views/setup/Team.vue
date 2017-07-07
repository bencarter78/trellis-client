<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title is-3">Create Or Join A Team</h1>

      <form @submit.prevent="login">
        <trellis-text-field
          name="id"
          ref="id"
          label="Team ID"
          classes="has-margin-bottom-md">
        </trellis-text-field>

        <trellis-text-field
          name="name"
          ref="name"
          label="Team Name"
          classes="has-margin-bottom-md">
        </trellis-text-field>

        <div class="field is-grouped">
          <p class="control">
            <button
              class="button is-primary"
              v-bind:class="isLoading ? 'is-loading' : ''">
              Go
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isLoading: false
      }
    }
  }
</script>
