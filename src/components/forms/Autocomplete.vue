<template>
  <div class="has-margin-bottom-md">
    <label class="label" v-bind:for="name" v-if="label">
      {{ label }}
    </label>

    <input :id="name" :name="name" type="hidden" v-bind:value="values.id">

    <input
      id="search"
      :name="search"
      class="input"
      placeholder="Search..."
      autocomplete="off"
      v-model="term"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter.prevent
      @keydown.enter="hit"
      @keydown.esc="reset"
      @blur="isValid"
      @input="search"/>

    <div id="autocomplete-results" v-if="hasItems">
      <ul class="list-group results">
        <li
          class="list-group-item results-item"
          v-for="(item, index) in items"
          :class="activeClass(index)"
          @mousedown="hit"
          @mousemove="setActive(index)">
          {{ item.resultsDisplay }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VueTypeahead from 'vue-typeahead'

  export default {
    extends: VueTypeahead,

    props: [
      'label',
      'endpoint', // The url to query
      'name', // Than name of the input
      'values', // The original values of the search input and the hidden input
      'format' // A function to format the results
    ],

    data () {
      return {
        term: '',
        src: this.endpoint,
        limit: 5,
        minChars: 3,
        queryParamName: 'q'
      }
    },

    mounted () {
      this.checkRequiredProps()
      this.query = this.values.search
    },

    methods: {
      checkRequiredProps () {
        for (let prop in this.$props) {
          if (this[prop] == null) {
            throw new Error(prop + ' is null. Please define a value for this prop.')
          }
        }
      },

      prepareResponseData (items) {
        return this.format(items)
      },

      search () {
        if (!this.searchMatchesQuery()) {
          this.update()
        }
      },

      searchMatchesQuery () {
        return this.values.search === this.query
      },

      onHit (item) {
        this.query = this.values.search = item.display
        this.values.id = item.id
        this.items = []
      },

      isValid () {
        if (!this.searchMatchesQuery()) {
          this.values.id = ''
        }
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
