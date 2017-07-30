<template>
<div>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Tasks</strong>
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

  <table class="table" v-if="tasks.length > 0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Due</th>
        <th class="has-text-centered">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tasks">
        <td>{{ t.name }}</td>
        <td>{{ t.owner_type.split('App\\').pop() }}</td>
        <td>{{ moment(t.due_on).format('DD/MM/YYYY') }}</td>
        <td class="has-text-centered">
          <a @click="openDeleteModal(o)">
            <span class="icon is-small">
              <i class="fa fa-pencil"></i>
            </span>
          </a>
          <a @click="openDeleteModal(t)">
            <span class="icon is-small">
              <i class="fa fa-trash-o"></i>
            </span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-else>
    <p>
      Looks like you haven't created any tasks for your project.
      <a class="is-success" @click="showAddModal = true">
        Let's fix that.
      </a>
    </p>
  </div>

  <trellis-modal v-if="showAddModal" @close="showAddModal = false">
    <h3 slot="header" class="title is-4">Add Task</h3>

    <div slot="body">
      <trellis-dropdown label="Type" name="type" :options="typeOptions" @updated="updateType"></trellis-dropdown>

      <trellis-dropdown
        v-if="selectedType === 'milestone'"
        label="Milestone"
        name="milestone"
        :options="getOptions(item.milestones)">
      </trellis-dropdown>

      <trellis-dropdown
        v-if="selectedType === 'stream'"
        label="Stream"
        name="stream"
        :options="getOptions(item.streams)">
      </trellis-dropdown>

      <trellis-dropdown
        v-if="selectedType === 'objective'"
        label="Objective"
        name="objective"
        :options="getOptions(item.objectives)">
      </trellis-dropdown>

      <trellis-text-field label="Name" name="name"></trellis-text-field>

      <trellis-datepicker label="Due Date" name="due_on"></trellis-datepicker>

      <trellis-dropdown
        label="Assigned To"
        name="assigned_to"
        :options="getMemberOptions(item.members)">
      </trellis-dropdown>
    </div>

    <div slot="footer">
      <span class="button is-primary" @click="save">SAVE</span>
    </div>
  </trellis-modal>

  <trellis-modal v-if="showDeleteModal" @close="showDeleteModal = false">
    <h3 slot="header" class="title is-4">Remove Task?</h3>

    <div slot="body">
      <p>
        Are you sure you want to delete this task from the project?
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
      tasks: [],
      endpoint: `/tasks`,
      moment: moment,
      selectedType: 'project',
      typeOptions: [
        {label: 'Project', value: 'project'}
      ]
    }
  },

  created () {
    this.tasks = this.item.tasks
    this.addResourceTasks()
    this.addTypeOptions()
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
      if (tasks) {
        tasks.forEach(t => this.tasks.push(t))
      }
    },

    addTypeOptions () {
      if (this.item.milestones.length > 0) {
        this.typeOptions.push({label: 'Milestone', value: 'milestone'})
      }

      if (this.item.streams.length > 0) {
        this.typeOptions.push({label: 'Stream', value: 'stream'})
      }

      if (this.item.objectives.length > 0) {
        this.typeOptions.push({label: 'Objective', value: 'objective'})
      }
    },

    save (e) {
      let resource = document.getElementById('type').value
      let uuid = resource === 'project'
        ? this.item.uid
        : document.getElementById(resource).value

      new Client()
        .request({
          url: this.endpoint,
          method: 'post',
          data: {
            resource: resource,
            uid: uuid,
            name: document.getElementById('name').value,
            assigned_to: document.getElementById('assigned_to').value,
            due_on: document.getElementById('due_on').value
          }
        })
        .then(res => {
          this.tasks.push(res.data.data.task)
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
          this.tasks.splice(this.tasks.indexOf(this.removableItem), 1)
          this.showDeleteModal = false
        })
        .catch(err => {
          console.log(err)
        })
    },

    getOptions (items) {
      let data = []
      items.forEach(item => {
        data.push({label: item.name, value: item.uid})
      })
      return data
    },

    getMemberOptions (items) {
      let data = []
      items.forEach(item => {
        data.push({label: item.name, value: item.username})
      })
      return data
    },

    updateType (e) {
      this.selectedType = e.target.value
    }
  }
}
</script>
