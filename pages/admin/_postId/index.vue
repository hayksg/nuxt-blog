<template>
  <div class="admin-post-page">
    <section class="update-form">
      <h1>Update The Post</h1>
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from "../../../components/Admin/AdminPostForm";

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data () {
      return {
        loadedPost: {
          author: 'Author Name',
          title: 'Some title',
          content: 'Some content',
          thumbnailLink: "http://cdn.recipes100.com/v/95df700ca7c4db714cdeb7285bad8896.jpg"
        }
      }
    },
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style>

</style>