<template>
  <div class="admin-page">

    <div class="page-header">
      <h1>Existing Posts</h1>

      <button
        class="btn btn-outline-primary"
        @click="$router.push('admin/new-post')"
      >
        Create Post
      </button>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
