<template>
  <div>
    <Navbar />
    <div class="container app-main-container">
      <transition name="main">
        <nuxt/>
      </transition>
    </div>
    <Footer />
    <button
      ref="scrollTopButton"
      class="app-button-to-top"
      @click="toTop()"
    >
      &#8682;
    </button>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar';
  import Footer from '~/components/Footer';

  export default {
    components: {
      Navbar,
      Footer
    },
    mounted () {
      window.addEventListener("scroll", this.appScrollEvent);
    },
    methods: {
      toTop () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(this.toTop);
          window.scrollTo(0, currentScroll - (currentScroll / 10));
        }
      },
      appScrollEvent () {
        let btn = this.$refs.scrollTopButton;

        if (document.documentElement.scrollTop > 400) {
          Object.assign(btn.style, {
            opacity: 1,
            transform: 'translateX(5px)',
            transition: 'all .5s'
          });
        } else {
          Object.assign(btn.style, {
            opacity: 0,
            transform: 'translateX(-100px)',
            transition: 'all .5s'
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 100px; /* Margin bottom by footer height */
    padding-top: 100px;
  }

  .app-main-container {
    margin-bottom: 200px;
  }

  h1 {
    font-family: 'Charm', cursive;
    height: 2rem;
    margin-bottom: 40px;
    color: white;
    text-shadow: 1px 1px #732372, 1px -1px #732372, -1px 1px #732372, -1px -1px #732372, 3px 3px 6px rgba(0,0,0,.5);
  }

  .page-title {
    margin-bottom: 30px;
  }

  a.nuxt-link-exact-active {
    color: #fff !important;
  }

  .main-enter-active, .main-leave-active {
    transform: translateY(0);
    transition: all .5s linear;
  }

  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  button.app-button-to-top {
    position: fixed;
    bottom: 24px;
    left: 0;
    opacity: 0;
    padding: 0 12px 4px;
    background-color: #563d7c;
    color: #fff;
    border: 1px solid darken(#563d7c, 10%);
    border-radius: 3px;
    cursor: pointer;
    font-size: 2em;

    &:focus,
    &:hover {
      background-color: darken(#563d7c, 10%);
      outline: none;
    }
  }
</style>
