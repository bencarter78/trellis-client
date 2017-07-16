<template>
  <div>
    <h1 class="title is-3">Dashboard</h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items">
        <h4 class="title is-4">{{ item.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import Client from './../http/client'

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
