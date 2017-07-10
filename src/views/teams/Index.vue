<template>
  <div>
    <h1 class="title is-3">Your Teams</h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items">
        <trellis-card>
          <div slot="title">{{ item.name }}</div>
          <div slot="footer">
            <div class="card-footer-item is-pulled-right">
              <router-link
                :to="{ name: 'teams.show', params: {id: item.uid} }"
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
            res.data.data.teams.forEach(item => this.items.push(item))
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
