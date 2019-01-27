<template>
  <nuxt-link
    :to="'/posts/' + id"
    class="app-post-link-wrap"
  >
    <article class="post-preview">
      <div
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        class="post-thumbnail"
      >
        <!-- ESLint not allow empty tags -->
      </div>
      <div class="post-content">
        <h3>{{ title }}</h3>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    name: "PostPreview",
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-post-link-wrap {
    display: block;
    padding: 0 10px 10px;
    margin: 20px 0;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    text-decoration: none;
  }

  .post-thumbnail {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    width: 100%;
    margin-bottom: 20px;
  }
</style>