<template>
  <div class="has-margin-bottom-3x">
    <div class="form-group" v-bind:class="{'has-error': error}">
      <label v-bind:for="fieldName">{{ label }}</label>
      <select :name="fieldName" class="form-control">
        <option v-for="option in options" :value="option.value" v-bind:selected="isSelected(option.value)">{{ option.label }}</option>
      </select>
    </div>
    <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
  </div>
</template>

<script>
  export default {
    props: ['fieldName', 'label', 'value', 'options', 'error'],
    methods: {
      isSelected (value) {
        if (this.value === value) {
          return 'selected'
        }
      }
    }
  }
</script>
