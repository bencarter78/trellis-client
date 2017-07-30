<template>
  <div>
    <h1 class="title is-3">Dashboard</h1>

    <div class="columns is-multiline">
      <div class="column is-3" v-for="team in teams">
        <trellis-card>
          <div slot="title">{{ team.name }}</div>

          <div slot="footer">
            <div class="card-footer-item is-pulled-right">
              <router-link
                :to="{ name: 'teams.show', params: {tuid: team.uid} }"
                class="button is-primary">
                View
              </router-link>
            </div>
          </div>
        </trellis-card>
      </div>
    </div>

    <!-- <div class="columns is-multiline">
      <div class="column is-3" v-for="project in projects">
        <h4 class="title is-4">{{ project.name }}</h4>
        <p>{{ project.description }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
  import Client from './../http/client'

  export default {
    data () {
      return {
        teams: [],
        projects: []
      }
    },

    created () {
      this.fetch('teams')
      this.fetch('projects')
    },

    methods: {
      fetch (resource) {
        new Client()
          .request({
            method: 'get',
            url: `/${resource}`
          })
          .then(res => {
            res.data.data[resource].forEach(item => this[resource].push(item))
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
