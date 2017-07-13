<template>
  <div>
    <h1 class="title is-3">Your Projects</h1>
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
            res.data.data.projects.forEach(item => this.items.push(item))
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
