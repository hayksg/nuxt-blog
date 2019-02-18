<template>
  <div class="all-posts">
    <h1>All posts</h1>
    <PostList />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList';

  export default {
    components: {
      PostList
    },
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>