<template>
  <div class="columns">
    <div class="column is-3">
      <trellis-nav-project :project="item.name" v-if="item"></trellis-nav-project>
    </div>
    <div class="column is-9">
      <div v-if="item">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ item.name }}</strong> Project Overview
              </p>
            </div>
          </div>

          <div class="level-right">
            <p class="level-item">
              <i class="fa fa-calendar has-margin-right"></i>
              20/10/17
            </p>
            <p class="level-item">
              <a class="button is-outlined is-success">
                On Track
              </a>
            </p>
          </div>
        </nav>

        <div class="columns">
          <div class="column is-6">
            <trellis-card>
              <div slot="title">Objectives</div>

              <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam error porro libero totam harum eum sequi aliquam molestiae illum provident laboriosam perspiciatis maxime minus ullam, sint quasi, voluptatem natus adipisci.
              </div>
            </trellis-card>
          </div>

          <div class="column is-6">
            <trellis-card>
              <div slot="title">Upcoming Tasks</div>

              <div slot="content">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Some Task</td>
                      <td>2 days</td>
                    </tr>
                    <tr>
                      <td>Some Other Task</td>
                      <td>20/10/17</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </trellis-card>
          </div>
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
            url: `/teams/${this.$route.params.id}/projects/${this.$route.params.pid}`
          })
          .then(res => {
            this.item = res.data.data.project
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
