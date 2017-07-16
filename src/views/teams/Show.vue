<template>
  <div class="columns">
    <div class="column is-3">
      <trellis-nav-team :team="item.name" v-if="item"></trellis-nav-team>
    </div>

    <div class="column is-9">
      <div v-if="item">
        <trellis-header>
          <span slot="title">
            <strong>{{ item.name }}</strong> Projects
          </span>

          <span slot="nav-right">
            <div class="level-right">
              <p class="level-item">
                <router-link class="button is-primary" :to="{
                  name: 'teams.projects.create',
                  params: {tid: this.$route.params.tid}
                }">
                  Add
                </router-link>
              </p>
            </div>
          </span>
        </trellis-header>

        <div v-if="item.projects">
          <trellis-card-projects :items="item.projects" :tid="item.uid"></trellis-card-projects>
        </div>

        <div v-else>
            <p>
              Looks like you have no projects for this team yet.
            </p>

            <router-link
              :to="{
                name: 'teams.projects.create',
                params: {tid: $route.params.tid}
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
            url: '/teams/' + this.$route.params.tid
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
