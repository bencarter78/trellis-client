<template>
  <div class="has-margin-bottom-md">
    <label class="label" v-bind:for="name" v-if="label">
      {{ label }}
    </label>

    <input
      class="input"
      placeholder="Search..."
      autocomplete="off"
      v-model="query"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter.prevent
      @keydown.enter="hit"
      @keydown.esc="reset"
      @blur="reset"
      @input="update"/>

    <div class="autocomplete-results" v-if="hasItems">
      <ul class="results">
        <li
          class="results-item"
          v-for="(item, index) in items"
          :class="activeClass(index)"
          @mousedown="hit"
          @mousemove="setActive(index)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VueTypeahead from 'vue-typeahead'

  export default {
    extends: VueTypeahead,

    props: ['label', 'endpoint', 'name', 'resource'],

    data () {
      return {
        query: '',
        src: this.endpoint,
        limit: 5,
        minChars: 2,
        queryParamName: 'q'
      }
    },

    methods: {
      prepareResponseData (data) {
        return data.data[this.resource]
      },

      onHit (item) {
        console.log(item.name)
        this.query = item.name
        this.items = []
      }
    }
  }
</script>

<style>
    #autocomplete-results {
        position: absolute;
        z-index: 999;
    }
</style>
