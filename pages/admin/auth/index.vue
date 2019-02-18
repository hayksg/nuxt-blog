<template>
  <div class="row">
    <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <AppButton
          type="submit"
          btn-style="btn btn-outline-primary"
        >
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </AppButton>
        <AppButton
          type="button"
          btn-style="btn btn-info"
          class="ml-3 float-right"
          @click="isLogin = !isLogin"
        >
          Swith to {{ isLogin ? 'Signup' : 'Login' }}
        </AppButton>
      </form>
    </div>
  </div>
</template>

<script>
  import AppControlInput from "@/components/UI/AppControlInput";
  import AppButton from "@/components/UI/AppButton";

  export default {
    layout: 'admin',
    components: {
      AppButton,
      AppControlInput
    },
    data () {
      return {
        isLogin: true
      }
    }
  }
</script>

<style scoped>

</style>
