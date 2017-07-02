<template>
  <div class="has-margin-bottom-3x">
    <div class="form-group" v-bind:class="{'has-error': error}">
      <label v-bind:for="fieldName">{{ label }}</label>
      <quill-editor ref="editor" :content="value" :options="editorOption" @input="update($event)"></quill-editor>
      <input type="hidden" v-bind:name="fieldName" :value="content" />
    </div>
    <span class="text-danger has-margin-top-1x" v-if="error">* Required field</span>
  </div>
</template>

<script>
  export default {
    props: ['fieldName', 'label', 'value', 'error'],
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
