<template>
  <div class="has-margin-bottom-md">
    <label class="label" v-bind:for="name" v-if="label">
      {{ label }}
    </label>

      <div class="autocomplete-input">
        <input
          :id="name"
          :name="name"
          class="input"
          placeholder="Search..."
          autocomplete="off"
          v-model="query"
          @keydown.down="down"
          @keydown.up="up"
          @keydown.enter.prevent
          @keydown.enter="hit"
          @input="update"/>

        <ul class="options-list" v-if="hasItems">
          <li
            v-for="(item, index) in items"
            class="results-item"
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

  .autocomplete-input {
    position: relative;
  }

  ul.options-list {
    display: flex;
    flex-direction: column;
    margin-top: -1px;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 3px 3px;
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }

  ul.options-list li {
    width: 100%;
    flex-wrap: wrap;
    background: white;
    margin: 0;
    border-bottom: 1px solid #eee;
    color: #363636;
    padding: 7px;
    cursor: pointer;
  }

  ul.options-list li.active {
    background: #f8f8f8
  }
</style>
