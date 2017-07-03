<template>
  <h1>Dashboard</h1>
</template>

<script>
  import Client from './../http/client'

  export default {
    data () {
      return {
        items: ''
      }
    },

    created () {
      let client = new Client()
      client.request({
        method: 'get',
        url: '/projects'
      })
    }
  }
</script>
