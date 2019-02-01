<template>
  <div>
    <TheHeader />
    <div class="container app-main-container">
      <transition name="main">
        <nuxt/>
      </transition>
    </div>
    <TheFooter />
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
  import TheHeader from '~/components/Navigation/TheHeader';
  import TheFooter from '~/components/Navigation/TheFooter';

  export default {
    components: {
      TheHeader,
      TheFooter
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

</style>
