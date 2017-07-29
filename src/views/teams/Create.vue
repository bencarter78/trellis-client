<template>
  <div>
    <h1 class="title is-2 has-margin-bottom">Create A New Project</h1>

    <form @submit.prevent="submit">
      <text-field label="Project Name" name="name"></text-field>

      <text-field label="Description" name="description"></text-field>

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
  import Client from './../../http/client'

  export default {
    methods: {
      submit () {
        new Client()
          .request({
            method: 'post',
            url: '/projects'
          })
      }
    }
  }
</script>
