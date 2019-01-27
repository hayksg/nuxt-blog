<template>
  <div>
    <section class="intro">
      <h1>Get the best cooking recipes</h1>
    </section>
    <section class="featured-posts">
      <div class="row">
        <div class="col-sm-12">

          <PostPreview
            id="1"
            title="Post title 1"
            preview-text="Description for post 1"
            thumbnail="https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg"
          />

          <PostPreview
            id="2"
            title="Post title 2"
            preview-text="Description for post 2"
            thumbnail="https://realfood.tesco.com/media/images/RFO-HoneyGlazedHam-1400x919-copy-1a07a533-a3a5-4b25-90c1-29e24aa000f5-0-1400x919.jpg"
          />

          <PostPreview
            id="3"
            title="Post title 3"
            preview-text="Description for post 3"
            thumbnail="http://cdn.recipes100.com/v/95df700ca7c4db714cdeb7285bad8896.jpg"
          />

          <PostPreview
            id="4"
            title="Post title 4"
            preview-text="Description for post 4"
            thumbnail="https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg"
          />

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    PostPreview
  }
}

</script>

<style lang="scss" scoped>

</style>
