<template>
  <div class="columns">
    <div class="column is-3">
      <trellis-nav-team :team="item.name" v-if="item"></trellis-nav-team>
    </div>
    <div class="column is-9">
      <div v-if="item">
        <h1 class="title is-3">{{ item.name }} Projects</h1>
        <div v-if="item.projects">
          <trellis-card-projects :items="item.projects"></trellis-card-projects>
        </div>
        <div v-else>
            <p>
              Looks like you have no projects for this team yet.
            </p>

            <router-link
              :to="{name: 'teams.projects.create', params: {id: $route.params.id}}"
              class="button is-primary has-margin-top">
              Create Project
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        active: 'settings',
        item: ''
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
            this.item = res.data.data.team
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
