<template>
  <div class="columns">
    <div class="column is-3">
      <trellis-nav-team :team="item.name" v-if="item"></trellis-nav-team>
    </div>

    <div class="column is-9">
      <div v-if="item">
        <h1 class="title is-3">{{ item.name }} Projects</h1>
        <div v-if="item.projects.length > 0">
          <trellis-card-projects :items="item.projects"></trellis-card-projects>
        </div>

        <div v-else>
            <p>
              Looks like you have no projects for this team yet.
            </p>

            <router-link
              :to="{
                name: 'teams.projects.create',
                params: {tid: $route.params.tuid}
              }"
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
      this.fetchData()
    },

    methods: {
      fetchData () {
        new Client()
          .request({
            method: 'get',
            url: '/teams/' + this.$route.params.tuid
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
