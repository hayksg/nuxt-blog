<template>
  <footer class="footer">
    <div class="container">
      <div class="app-footer-text">&copy; Copyright {{ year }} | Created by Hayk.</div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    computed: {
      year () {
        let year = new Date().getFullYear();
        return year > 2019 ? '2019 - ' + year : year;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #563d7c;
    display: flex;

    div {
      margin: auto;
      text-align: center;

      div.app-footer-text {
        color: #cbbde2;
      }
    }
  }
</style>