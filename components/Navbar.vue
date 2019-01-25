<template>
  <nav class="navbar navbar-expand-lg navbar-dark app-navbar mb-3">
    <div class="container">
      <nuxt-link
        class="navbar-brand"
        to="/"
      >Home</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar()"
      >
        <span class="navbar-toggler-icon">&nbsp;</span>
      </button>

      <transition name="fade">
        <div
          v-if="showNavbar"
          class="collapse navbar-collapse show"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <nuxt-link
                class="nav-link"
                to="/posts"
              >Posts <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item active">
              <nuxt-link
                class="nav-link"
                to="/about"
                nuxt-link-active="active"
              >About <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data () {
      return {
        showNavbar: false
      }
    },
    mounted () {
      window.addEventListener("resize", this.myEventHandler);

      if (document.body.clientWidth > 991) {
        this.showNavbar = true;
      }
    },
    methods: {
      toggleNavbar () {
        if (this.showNavbar === false) {
          this.showNavbar = true
        } else {
          this.showNavbar = false
        }
      },
      myEventHandler () {
        if (document.body.clientWidth < 992) {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav.app-navbar {
    background-color: #563d7c;
    padding: 1rem;
    color: #aaa;

    .navbar-brand, ul.navbar-nav a.nav-link {
      color: #cbbde2;
      transition: color 320ms linear;

      &:hover {
        color: #fff !important;
      }
    }
  }

  .fade-enter-active {
    max-height: 1000px;
    transition: all 2s ease-out;
  }

  .fade-leave-active {
    max-height: 1000px;
    transition: all .5s ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    max-height: 0;
    opacity: 0;
  }

</style>