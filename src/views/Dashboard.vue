<template>
  <h1>Dashboard</h1>
</template>

<script>
  export default {
    data () {
      return {
        items: ''
      }
    },

    created () {
      window.axios({
        method: 'get',
        url: 'projects'
      })
    }
  }
</script>
