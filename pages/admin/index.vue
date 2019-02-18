<template>
  <div class="admin-page">

    <div class="page-header">
      <h1>Existing Posts</h1>

      <AppButton
        class="btn btn-outline-primary"
        @click="$router.push('admin/new-post')"
      >
        Create Post
      </AppButton>

    </div>

    <PostList is-admin />

  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList';
  import AppButton from '@/components/UI/AppButton';

  export default {
    layout: 'admin',
    components: {
      PostList,
      AppButton
    },
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
