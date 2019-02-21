<template>
  <div class="post-page">
    <section>
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div>Last updated on {{ loadedPost.updatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:test@test.com">test@test.com</a></p>
    </section>
  </div>
</template>

<script>
  export default {
    asyncData (context, callback) {
      setTimeout(() => {
        callback(null, {
          loadedPost: {
            id: context.route.params.id, 
            title: 'First Post (ID: ' + context.route.params.id + ')', 
            author: 'Admin', 
            updatedDate: new Date().toLocaleDateString(), 
            content: 'Some content here',
            previewText: 'Some description 1', 
            thumbnail: 'https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg'
          }
        })
      }, 1500);
    },
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>