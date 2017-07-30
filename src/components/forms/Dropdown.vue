<template>
  <div class="has-margin-bottom-md">
    <div class="field" v-bind:class="{'has-error': error}">
      <label class="label" v-bind:for="name" v-if="label">
        {{ label }}
      </label>

      <div class="control">
        <div class="select">
          <select :id="name" :name="name" @change="$emit('updated', $event)">
            <option v-for="option in options" :value="option.value" v-bind:selected="isSelected(option.value)">{{ option.label }}</option>
          </select>
        </div>
      </div>
    </div>
    <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
  </div>
</template>

<script>
  export default {
    props: ['name', 'label', 'value', 'options', 'error'],

    methods: {
      isSelected (value) {
        if (this.value === value) {
          return 'selected'
        }
      }
    }
  }
</script>
