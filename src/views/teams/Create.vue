<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="title is-3">Create A Team</h1>

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
  </div>
</template>

<script>
  import Client from '../../http/client'

  export default {
    data () {
      return {
        isLoading: false
      }
    },

    methods: {
      submit () {
        let name = document.getElementsByName('name')[0].value

        if (name !== '') {
          this.sendRequest(name)
        }
      },

      sendRequest (name) {
        new Client()
          .request({
            url: '/teams',
            method: 'post',
            data: {
              name: name
            }
          })
          .then(res => {
            this.$router.push({name: 'teams.show', params: {tid: res.data.data.team.uid}})
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
