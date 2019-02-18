<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <h1>Create A New Post</h1>
      <AdminPostForm />
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
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>