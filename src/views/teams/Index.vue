<template>
  <div>
    <trellis-header>
      <span slot="title">
        <strong>Your Teams</strong>
      </span>

      <span slot="nav-right">
        <div class="level-right">
          <p class="level-item">
            <router-link class="button is-primary" :to="{name: 'teams.create'}">
              Add
            </router-link>
          </p>
        </div>
      </span>
    </trellis-header>

    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items">
        <trellis-card>
          <div slot="title">{{ item.name }}</div>
          <div slot="footer">
            <div class="card-footer-item is-pulled-right">
              <router-link
                :to="{
                  name: 'teams.show',
                  params: {tuid: item.uid}
                }"
                class="button is-primary">
                View
              </router-link>
            </div>
          </div>
        </trellis-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    data () {
      return {
        items: []
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
            url: '/teams'
          })
          .then(res => {
            this.items = res.data.data.teams
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
