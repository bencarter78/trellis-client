<template>
<div>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Milestones</strong>
        </p>
      </div>
    </div>

    <div class="level-right">
      <p class="level-item">
        <a class="button is-success" @click="showAddModal = true">
          Add
        </a>
      </p>
    </div>
  </nav>

  <table class="table" v-if="milestones.length > 0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Due</th>
        <th class="has-text-centered">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="milestone in milestones">
        <td>{{ milestone.name }}</td>
        <td>{{ moment(milestone.due_on).format('DD/MM/YYYY') }}</td>
        <td class="has-text-centered">
          <a @click="openDeleteModal(milestone)">
            <span class="icon is-small">
              <i class="fa fa-trash-o"></i>
            </span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <trellis-modal v-if="showAddModal" @close="showAddModal = false">
    <h3 slot="header" class="title is-4">Add Milestone</h3>

    <div slot="body">
      <trellis-text-field
        label="Name"
        name="name">
      </trellis-text-field>

      <trellis-text-area
        label="Description"
        name="description">
      </trellis-text-area>

      <trellis-datepicker
        label="Due Date"
        name="due_on">
      </trellis-datepicker>
    </div>

    <div slot="footer">
      <span class="button is-primary" @click="save">SAVE</span>
    </div>
  </trellis-modal>

  <trellis-modal v-if="showDeleteModal" @close="showDeleteModal = false">
    <h3 slot="header" class="title is-4">Remove Milestone?</h3>

    <div slot="body">
      <p>
        Are you sure you want to delete this milestone from the project?
      </p>
    </div>

    <div slot="footer">
      <span class="button is-danger" @click="remove">DELETE</span>
    </div>
  </trellis-modal>
</div>
</template>

<script>
import Client from './../../http/client'
const moment = require('moment')

export default {
  props: ['item'],

  data () {
    return {
      showAddModal: false,
      showDeleteModal: false,
      removableItem: '',
      milestones: [],
      endpoint: `/projects/${this.$route.params.puid}/milestones`,
      moment: moment
    }
  },

  created () {
    this.milestones = this.item.milestones
  },

  methods: {
    save (e) {
      new Client()
        .request({
          url: this.endpoint,
          method: 'post',
          data: {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            due_on: document.getElementById('due_on').value
          }
        })
        .then(res => {
          this.milestones.push(res.data.data.milestone)
          this.showAddModal = false
        })
        .catch(err => {
          console.log(err)
        })
    },

    openDeleteModal (item) {
      this.removableItem = item
      this.showDeleteModal = true
    },

    remove () {
      new Client()
        .request({
          url: `${this.endpoint}/${this.removableItem.uid}`,
          method: 'delete'
        })
        .then(res => {
          this.milestones.splice(this.milestones.indexOf(this.removableItem), 1)
          this.showDeleteModal = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
