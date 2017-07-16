<template>
  <div class="has-margin-bottom">
    <div class="field"  v-bind:class="{'has-error': error}">
      <label class="label" v-bind:for="name">{{ label }}</label>
      <p class="control">
        <input :id="name" :name="name" ref="pikaday" :value="value" class="input" />
      </p>
      <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
    </div>
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
