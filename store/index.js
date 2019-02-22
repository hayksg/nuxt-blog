import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
              ])
              resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
}

export default createStore