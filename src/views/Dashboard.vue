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
      console.log(window.axios)
      window.axios({
        method: 'get',
        url: '/projects'
      })
    }
  }
</script>
