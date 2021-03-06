<template>
<div>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Streams</strong>
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

  <table class="table" v-if="streams.length > 0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Owner</th>
        <th class="has-text-centered">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="stream in streams">
        <td>{{ stream.name }}</td>
        <td>{{ getOwner(stream) }}</td>
        <td class="has-text-centered">
          <a @click="openDeleteModal(stream)">
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
      Looks like you haven't created any streams for your project.
      <a class="is-success" @click="showAddModal = true">
        Let's fix that.
      </a>
    </p>
  </div>

  <trellis-modal v-if="showAddModal" @close="showAddModal = false">
    <h3 slot="header" class="title is-4">Add Stream</h3>

    <div slot="body">
      <trellis-autocomplete
        :endpoint="'/teams/' + $route.params.tuid + '/streams/search'"
        label="Name"
        resource="streams"
        name="name">
      </trellis-autocomplete>

      <trellis-dropdown
        :options="getMembers()"
        values=""
        label="Owner"
        name="owner_id">
      </trellis-dropdown>
    </div>

    <div slot="footer">
      <span class="button is-primary" @click="save">SAVE</span>
    </div>
  </trellis-modal>

  <trellis-modal v-if="showDeleteModal" @close="showDeleteModal = false">
    <h3 slot="header" class="title is-4">Remove Stream?</h3>

    <div slot="body">
      <p>
        Are you sure you want to delete this stream from the project?
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

export default {
  props: ['item'],

  data () {
    return {
      showAddModal: false,
      showDeleteModal: false,
      removableItem: '',
      streams: [],
      endpoint: `/projects/${this.$route.params.puid}/streams`
    }
  },

  created () {
    this.streams = this.item.streams
  },

  methods: {
    save (e) {
      new Client()
        .request({
          url: this.endpoint,
          method: 'post',
          data: {
            name: document.getElementById('name').value,
            owner_id: document.getElementById('owner_id').value
          }
        })
        .then(res => {
          this.streams.push(res.data.data.stream)
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
          this.streams.splice(this.streams.indexOf(this.removableItem), 1)
          this.showDeleteModal = false
        })
        .catch(err => {
          console.log(err)
        })
    },

    formatAutocomplete (items) {
      let data = []
      items.forEach(item => {
        data.push(item)
      })
      return data
    },

    getMembers () {
      let data = []

      this.item.members.forEach(member => {
        data.push({label: member.name, value: member.username})
      })

      return data
    },

    getOwner (stream) {
      return stream.owners[stream.owners.length - 1].name
    }
  }
}
</script>
