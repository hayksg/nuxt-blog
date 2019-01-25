<template>
  <div>
    <Navbar />
    <div class="container">
      <transition name="main">
        <nuxt/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar';

  export default {
    components: {
      Navbar
    }
  }

</script>

<style>
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    height: 2rem;
    margin-bottom: 30px;
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
</style>
