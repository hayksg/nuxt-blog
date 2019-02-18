<template>
  <div>
    <TheHeader />
    <div>
      <transition name="main">
        <div class="error-page">
          <h1>Page not found!</h1>
        </div>
      </transition>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
  h1 {
    text-shadow: 1px 1px #d00, 1px -1px #d00, -1px 1px #d00, -1px -1px #d00, 3px 3px 6px rgba(0,0,0,.5);
  }
</style>

