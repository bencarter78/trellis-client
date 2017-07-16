<template>
  <div>
    <trellis-header>
      <span slot="title">
        <strong>Your Projects</strong>
      </span>
    </trellis-header>

    <trellis-card-projects :items="items"></trellis-card-projects>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        items: []
      }
    },

    created () {
      this.fetchProjects()
    },

    methods: {
      fetchProjects () {
        new Client()
          .request({
            method: 'get',
            url: '/projects'
          })
          .then(res => {
            this.items = res.data.data.projects
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
