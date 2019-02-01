<template>
  <div class="form-group">
    <label><slot />
      <input
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        class="form-control"
        @input="$emit('input', $event.target.value)"
      >
      <textarea
        v-if="controlType === 'textarea'"
        :value="value"
        rows="10"
        class="form-control"
        @input="$emit('input', $event.target.value)"
      >&nbsp;</textarea>
    </label>
  </div>
</template>

<script>
  export default {
    name: "AppControlInput",
    props: {
      controlType: {
        type: String,
        default: 'input'
      },
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  label {
    display: block;
  }
</style>