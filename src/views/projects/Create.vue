<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title is-2 has-margin-bottom">Create A New Project</h1>

      <form @submit.prevent="submit">
        <div class="has-margin-bottom-md">
          <trellis-text-field label="Project Name" name="name"></trellis-text-field>
        </div>

        <div class="has-margin-bottom-md">
          <trellis-text-area label="Description" name="description"></trellis-text-area>
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
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    methods: {
      submit (e) {
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value

        if (name.length > 0) {
          new Client()
            .request({
              method: 'post',
              url: `/teams/${this.$route.params.id}/projects`,
              data: {
                name: name,
                description: description
              }
            })
            .then(res => {
              this.$router.push({
                name: 'teams.projects.show',
                params: {id: res.data.data.project.uid}
              })
            })
            .catch(err => {
              console.log(err)
            })
        }

        this.errors = 'Please enter the name of the project.'
      }
    }
  }
</script>
