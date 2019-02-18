<template>
  <section class="featured-posts">
    <div class="row">
      <div class="col-sm-12">

        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :is-admin="isAdmin"
          :title="post.title"
          :preview-text="post.previewText"
          :thumbnail="post.thumbnail"
        />

      </div>
    </div>
  </section>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview';

  export default {
    name: "PostList",
    components: {
      PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>