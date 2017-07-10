<template>
  <div class="columns">
    <div class="column is-3">
      <trellis-nav-team></trellis-nav-team>
    </div>
    <div class="column is-9">
      <h1 class="title is-3">Team Overview</h1>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        active: 'settings'
      }
    },

    created () {
      this.fetch()
    },

    methods: {
      fetch () {
        new Client()
          .request({
            method: 'get',
            url: '/teams/' + this.$route.params.id
          })
          .then(res => {
            console.log(res)
          })
          .err(err => {
            console.log(err)
          })
      }
    }
  }
</script>
