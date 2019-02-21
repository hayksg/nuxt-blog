<template>
  <div class="all-posts">
    <h1>All posts</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList';

  export default {
    components: {
      PostList
    },
    asyncData (context) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            loadedPosts: [
              {
                id: '1', 
                title: 'Title 1', 
                previewText: 'Some description 1', 
                thumbnail: 'https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg'
              },
              {
                id: '2', 
                title: 'Title 2', 
                previewText: 'Some description 2', 
                thumbnail: 'https://realfood.tesco.com/media/images/RFO-HoneyGlazedHam-1400x919-copy-1a07a533-a3a5-4b25-90c1-29e24aa000f5-0-1400x919.jpg'
              },
              {
                id: '3', 
                title: 'Title 3', 
                previewText: 'Some description 3', 
                thumbnail: 'http://cdn.recipes100.com/v/95df700ca7c4db714cdeb7285bad8896.jpg'
              },
              {
                id: '4', 
                title: 'Title 4', 
                previewText: 'Some description 4', 
                thumbnail: 'https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg'
              }
            ]
          });
        }, 1000);     
      })
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
    },
    created () {
      this.$store.dispatch('setPosts', this.loadedPosts);
      console.log(this.$store.getters.loadedPosts);
      
    },
    mounted () {
      // to make transition work good on the page
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>