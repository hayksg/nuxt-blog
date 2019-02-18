<template>
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
      btn-style="cancel float-right"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
  import AppControlInput from "../UI/AppControlInput";
  import AppButton from "../UI/AppButton";

  export default {
    name: "AdminPostForm",
    components: {
      AppButton,
      AppControlInput
    },
    props: {
      post: {
        type: Object,
        required: false,
        default: Object
      }
    },
    data () {
      return {
        editedPost: this.post
          ? { ...this.post }
          : {
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