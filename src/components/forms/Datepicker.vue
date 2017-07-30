<template>
  <div class="has-margin-bottom-md">
    <div class="field"  v-bind:class="{'has-error': error}">
      <label class="label" v-bind:for="name" v-if="label">
        {{ label }}
      </label>

      <p class="control">
        <input
          :id="name"
          :name="name"
          ref="pikaday"
          :value="value"
          class="input" />
      </p>
    </div>
    <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
  </div>
</template>

<script>
  const moment = require('moment')
  export default {
    props: {
      name: {
        default: ''
      },
      label: {
        default: ''
      },
      value: {
        default: ''
      },
      error: {
        default: ''
      },
      minDate: {
        default: function () {
          return moment().toDate()
        }
      }
    },
    mounted () {
      this.initPicker()
    },
    methods: {
      initPicker () {
        var self = this
        require(['pikaday'], function (Pikaday) {
          return new Pikaday({
            field: self.$refs.pikaday,
            format: 'DD/MM/YYYY',
            minDate: self.minDate
          })
        })
      }
    }
  }
</script>

<style src="pikaday/css/pikaday.css"></style>
