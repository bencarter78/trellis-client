<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>Objectives</strong>
          </p>
        </div>
      </div>

      <div class="level-right">
        <p class="level-item">
          <a class="button is-success" @click="showModal = true">
            Add
          </a>
        </p>
      </div>
    </nav>

    <table class="table" v-if="objectives.length > 0">
      <tbody>
        <tr v-for="o in objectives">
          <td>{{ o.name }}</td>
        </tr>
      </tbody>
    </table>

    <trellis-modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" class="title is-4">Add Objective</h3>

      <div slot="body">
        <trellis-text-field label="Name" name="name"></trellis-text-field>
      </div>

      <div slot="footer">
        <span class="button is-primary" @click="save">SAVE</span>
      </div>
    </trellis-modal>
  </div>
</template>

<script>
  import Client from './../../http/client'

  export default {
    props: ['item'],

    data () {
      return {
        showModal: false,
        objectives: []
      }
    },

    created () {
      this.objectives = this.item.objectives
    },

    methods: {
      save (e) {
        new Client()
          .request({
            url: `projects/${this.$route.params.pid}/objectives`,
            method: 'post',
            data: {
              name: document.getElementById('name').value
            }
          })
          .then(res => {
            this.objectives.push(res.data.data.objective)
            this.showModal = false
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
