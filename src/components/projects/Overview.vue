<template>
  <div>
    <div class="content is-medium">
      <div class="notification is-light">{{ item.description }}</div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6">
        <trellis-card>
          <div slot="title">Objectives</div>

          <div slot="content">
            <table class="table">
              <tbody>
                <tr v-for="o in item.objectives">
                  <td>{{ o.name }}</td>
                  <td>
                    <div v-if="o.is_complete">
                      <span class="icon is-primary">
                        <i class="fa fa-check-square-o"></i>
                      </span>
                    </div>
                    <div v-else>
                      {{ moment(o.due_on).format('DD/MM/YYYY') }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </trellis-card>
      </div>

      <div class="column is-6">
        <trellis-card>
          <div slot="title">Milestones</div>

          <div slot="content">
            <table class="table">
              <tbody>
                <tr v-for="m in item.milestones">
                  <td>{{ m.name }}</td>
                  <td>{{ moment(m.due_on).format('DD/MM/YYYY') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </trellis-card>
      </div>

      <div class="column is-6">
        <trellis-card>
          <div slot="title">Streams</div>

          <div slot="content">
            <table class="table">
              <tbody>
                <tr v-for="s in item.streams">
                  <td>{{ s.name }}</td>
                  <td>{{ s.owners[s.owners.length-1].name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </trellis-card>
      </div>

      <div class="column is-6">
        <trellis-card>
          <div slot="title">Upcoming Due Tasks</div>

          <div slot="content">
            <table class="table">
              <tbody>
                <tr v-for="t in dueTasks()">
                  <!-- <td>{{ t.name }}</td>
                  <td>{{ t.due_on) }}</td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </trellis-card>
      </div>
    </div>

  </div>
</template>

<script>
  const moment = require('moment')

  export default {
    props: ['item'],

    data () {
      return {
        moment: moment,
        tasks: []
      }
    },

    created () {
      this.tasks = this.item.tasks
      this.addResourceTasks()
    },

    methods: {
      addResourceTasks () {
        ['milestones', 'streams', 'objectives'].forEach(r => {
          this.item[r].forEach(m => {
            this.addTasks(m.tasks)
          })
        })
      },

      addTasks (tasks) {
        if (tasks.length > 0) {
          tasks.forEach(t => this.tasks.push(t))
        }
      },

      dueTasks () {
        return this.tasks
      }
    }
  }
</script>
