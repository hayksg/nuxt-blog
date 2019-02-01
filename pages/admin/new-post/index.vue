<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <h1>Create A New Post</h1>
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput
          v-model="editedPost.content"
          control-type="textarea"
        >
          Content
        </AppControlInput>
        <AppButton
          type="submit"
          btn-style="save"
        >Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
        >
          Cancel
        </AppButton>
      </form>
    </section>
  </div>
</template>

<script>
  import AppControlInput from "../../../components/UI/AppControlInput";
  import AppButton from "../../../components/UI/AppButton";

  export default {
    components: {
      AppButton,
      AppControlInput
    },
    data () {
      return {
        editedPost: {
          author: '',
          title: '',
          thumbnailLink: '',
          content: ''
        }
      }
    },
    methods: {
      onSave () {
        console.log(this.editedPost);
      },
      onCancel () {
        this.$router.push('/admin');
      }
    }
  }
</script>

<style scoped>

</style>