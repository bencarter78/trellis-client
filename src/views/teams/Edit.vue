<template>
  <div class="columns">
    <h1 class="title is-3">{{ item.name }}</h1>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        item: '',
        client: new Client()
      }
    },

    mounted () {
      this.fetch()
    },

    methods: {
      fetch () {
        this.client.request({
          method: 'get',
          url: `/projects/${this.$route.params.id}`
        })
      }
    }
  }
</script>
