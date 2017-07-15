<template>
  <div class="columns" v-if="item">
    <div class="column is-3">
      <trellis-nav-project
        @update-view="updateView"
        :project="item.name">
      </trellis-nav-project>
    </div>

    <div class="column is-9">
      <trellis-project-header :item="item"></trellis-project-header>
      <component v-bind:is="view" :item="item"></component>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        view: 'trellis-project-overview',
        item: ''
      }
    },

    created () {
      this.fetchData()
    },

    methods: {
      fetchData () {
        new Client()
          .request({
            method: 'get',
            url: `/teams/${this.$route.params.id}/projects/${this.$route.params.pid}`
          })
          .then(res => {
            this.item = res.data.data.project
          })
          .catch(err => {
            console.log(err)
          })
      },

      updateView (view) {
        this.view = `trellis-project-${view}`
      }
    }
  }
</script>
