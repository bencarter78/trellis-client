<template>
  <aside class="menu">
    <ul class="menu-list">
      <li v-for="item in items">
        <a v-bind:class="active === item.name ? 'is-active' : ''" @click="updateView(item.name)">
          <span class="icon is-small">
            <i class="fa fa-fw has-margin-right" v-bind:class="item.icon"></i>
          </span>
          {{ helper.ucFirst(item.name) }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
  import StringHelper from './../../helpers/string'

  export default {
    props: ['project'],

    data () {
      return {
        helper: StringHelper,
        active: '',
        items: [
          {name: 'overview', icon: 'fa-tachometer'},
          {name: 'objectives', icon: 'fa-bullseye'},
          {name: 'streams', icon: 'fa-code-fork'},
          {name: 'milestones', icon: 'fa-diamond'},
          {name: 'tasks', icon: 'fa-check-square-o'},
          {name: 'lessons', icon: 'fa-lightbulb-o'},
          // {name: 'status', icon: 'fa-flag'},
          {name: 'risks', icon: 'fa-warning'},
          {name: 'issues', icon: 'fa-fire'},
          {name: 'Members', icon: 'fa-users'},
          {name: 'settings', icon: 'fa-cog'}
        ]
      }
    },

    created () {
      this.active = this.items[0].name
    },

    methods: {
      updateView (view) {
        this.active = view
        this.$emit('update-view', view)
      }
    }
  }
</script>
