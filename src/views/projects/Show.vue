<template>
  <div class="columns" v-if="item">
    <div class="column is-3">
      <trellis-nav-project
        @update-view="updateView"
        :project="item.name">
      </trellis-nav-project>
    </div>

    <div class="column is-9">
      <trellis-header>
        <span slot="title">
          <strong>{{ item.name }}</strong> Project
        </span>

        <span slot="nav-right">
          <div class="level-right">
            <p class="level-item">
              <span class="icon">
                <i class="fa fa-user has-margin-right"></i>
              </span>
              {{ item.owner.name }}
            </p>
            <p class="level-item">
              <span class="icon">
                <i class="fa fa-users has-margin-right"></i>
              </span>
              {{ item.members.length }}
            </p>
            <p class="level-item">
              <span class="icon">
                <i class="fa fa-calendar has-margin-right"></i>
              </span>
              {{ getDueDate(item.due_on) }}
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

  const moment = require('moment')

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
            url: `/teams/${this.$route.params.tuid}/projects/${this.$route.params.puid}`
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
      },

      getDueDate (due) {
        return due ? moment(due).format('DD/MM/YYYY') : ''
      }
    }
  }
</script>
