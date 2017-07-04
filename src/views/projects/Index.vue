<template>
  <div>
    <h1 class="title is-3">Your Projects</h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items">
        <trellis-card>
          <div slot="title">{{ item.name }}</div>

          <div slot="content">
            {{ item.description }}
          </div>

          <div slot="footer">
            <div class="card-footer-item is-pulled-right">
              <router-link
                :to="{ name: 'projects.edit', params: {id: item.id} }"
                class="button is-primary">
                Edit
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
      this.fetchProjects()
    },

    methods: {
      fetchProjects () {
        new Client()
          .request({
            method: 'get',
            url: '/projects'
          })
          .then(res => {
            console.log(res)
            res.data.data.projects.forEach(item => this.items.push(item))
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
