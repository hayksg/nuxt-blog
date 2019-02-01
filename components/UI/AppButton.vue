<template>
  <button
    v-bind="$attrs"
    :class="btnStyle"
    class="button"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "AppButton",
    props: {
      btnStyle: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .save, .cancel {
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    color: #fff;
    cursor: pointer;
    transition: all .3s linear;
  }

  .cancel {
    background-color: darkorange;

    &:hover {
       background-color: darken(darkorange, 10%);
    }
  }

  .save {
    background-color: green;

    &:hover {
      background-color: darken(green, 10%);
    }
  }
</style>
