<template>
  <div>
    <section class="intro">
      <h1>Get the best cooking recipes</h1>
    </section>
    <section class="featured-posts">
      <div class="row">
        <div class="col-sm-12">
          <nuxt-link
            :to="'/posts/' + 1"
            class="app-post-link-wrap"
          >
            <article class="post-preview">
              <div
                class="post-thumbnail"
                style="background-image: url('https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg')"
              >
                <!-- ESLint not allow empty tags -->
              </div>
              <div class="post-content">
                <h3>Post Title 1</h3>
                <p>Preview Text 1</p>
              </div>
            </article>
          </nuxt-link>

          <nuxt-link
            :to="'/posts/' + 2"
            class="app-post-link-wrap"
          >
            <article class="post-preview">
              <div
                class="post-thumbnail"
                style="background-image: url('https://realfood.tesco.com/media/images/RFO-HoneyGlazedHam-1400x919-copy-1a07a533-a3a5-4b25-90c1-29e24aa000f5-0-1400x919.jpg')"
              >
                <!-- ESLint not allow empty tags -->
              </div>
              <div class="post-content">
                <h3>Post Title 2</h3>
                <p>Preview Text 2</p>
              </div>
            </article>
          </nuxt-link>

          <nuxt-link
            :to="'/posts/' + 3"
            class="app-post-link-wrap"
          >
            <article class="post-preview">
              <div
                class="post-thumbnail"
                style="background-image: url('http://cdn.recipes100.com/v/95df700ca7c4db714cdeb7285bad8896.jpg')"
              >
                <!-- ESLint not allow empty tags -->
              </div>
              <div class="post-content">
                <h3>Post Title 3</h3>
                <p>Preview Text 3</p>
              </div>
            </article>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

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
