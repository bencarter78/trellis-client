<template>
  <div class="has-margin-bottom-3x">
    <div class="form-group"  v-bind:class="{'has-error': error}">
      <label v-bind:for="fieldName">{{ label }}</label>
      <input :name="fieldName" ref="pikaday" :value="value" class="form-control" />
      <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
    </div>
  </div>
</template>

<script>
  const moment = require('moment')
  export default {
    props: {
      fieldName: {
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
