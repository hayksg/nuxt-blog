<template>
  <div class="post-page">
    <section>
      <h1>Single post Name</h1>
      <div class="post-details">
        <div>Last updated on XXX</div>
        <div>Written by NAME</div>
      </div>
      <p>Content</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:test@test.com">test@test.com</a></p>
    </section>
  </div>
</template>

<script>
  export default {
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>