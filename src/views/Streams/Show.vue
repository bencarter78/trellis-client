<template>
  <div class="columns" v-if="item">
    <div class="column is-3">
      <trellis-nav-stream @update-view="updateView"></trellis-nav-stream>
    </div>

    <div class="column is-9">
      <trellis-header>
        <span slot="title">
          <span class="icon">
            <i class="fa fa-code-fork"></i>
          </span>
          <strong>{{ item.name }}</strong> Stream
          <small class="is-small">{{ item.project.name }}</small>
        </span>

        <span slot="nav-right">
          <div class="level-right">
            <p class="level-item">
              <span class="icon">
                <i class="fa fa-calendar has-margin-right"></i>
              </span>
              2/07/17
            </p>
            <p class="level-item">
              <span class="button is-primary is-outlined">
                On Track
              </span>
            </p>
          </div>
        </span>
      </trellis-header>

      <component v-bind:is="view" :item="item"></component>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        view: 'trellis-stream-overview',
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
            url: `/projects/${this.$route.params.pid}/streams/${this.$route.params.sid}`
          })
          .then(res => {
            this.item = res.data.data.stream
          })
          .catch(err => {
            console.log(err)
          })
      },

      updateView (view) {
        this.view = `trellis-stream-${view}`
      }
    }
  }
</script>
