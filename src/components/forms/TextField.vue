<template>
  <div class="has-margin-bottom-md">
    <div class="field" v-bind:class="{'has-error': error}">
      <label class="label" v-bind:for="name" v-if="label">
        {{ label }}
      </label>

      <p class="control">
        <input
          :id="name"
          :type="type"
          v-bind:name="name"
          class="input"
          v-bind:class="classes"
          v-bind:value="value">
      </p>
    </div>
    <span class="text-danger has-margin-top" v-if="error">* Required field</span>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        default: 'text',
        type: String
      },
      name: String,
      label: String,
      value: [String, Number],
      error: String,
      classes: String
    }
  }
</script>
