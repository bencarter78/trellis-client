<template>
  <div>
    <h1 class="title is-2 has-margin-bottom">Create A New Project</h1>

    <form @submit.prevent="submit">
      <div class="has-margin-bottom-md">
        <text-field label="Project Name" name="name"></text-field>
      </div>

      <div class="has-margin-bottom-md">
        <text-field label="Description" name="description"></text-field>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <button class="button is-link">Cancel</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  const config = require('./../../../config/dev.env')
  const axios = require('axios')

  export default {
    methods: {
      submit () {
        axios
          .get(config.TRELLIS_SERVER_URL)
      }
    }
  }
</script>
