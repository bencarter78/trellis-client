<template>
  <div class="has-margin-bottom-md">
    <div class="field" v-bind:class="{'has-error': error}">
      <label class="label" :for="name">{{ label }}</label>
      <div class="control">
        <textarea
          :name="name"
          :id="name"
          class="textarea"
          cols="30"
          rows="10">{{ value }}</textarea>
      </div>
    </div>
    <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
  </div>
</template>

<script>
  export default {
    props: ['name', 'label', 'value', 'error'],
    data () {
      return {
        content: this.value,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', {'list': 'ordered'}, {'list': 'bullet'}, 'link']
            ]
          }
        }
      }
    },
    methods: {
      update (value) {
        this.content = value
      }
    }
  }
</script>

<style lang="scss">
  .ql-toolbar.ql-snow {
    background: #F1F1F1;
  }
  .ql-container.ql-snow {
    background: #FFF;
  }
</style>
