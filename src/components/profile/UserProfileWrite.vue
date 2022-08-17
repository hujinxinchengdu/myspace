<template>
  <div class="card edit-field">
    <div class="card-body">
      <label for="edit-post" class="form-label">Edit Post</label>
      <textarea
        v-model="content"
        class="form-control"
        id="edit-post"
        rows="3"
      ></textarea>
      <button
        @click="post_a_post"
        type="button"
        class="btn btn-primary btn-sm edit-submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UserProfileWrite",
  setup(props, context) {
    let content = ref("");

    const post_a_post = () => {
      context.emit("post_a_post", content.value);
      content.value = "";
    };
    return {
      content,
      post_a_post,
    };
  },
};
</script>

<style scoped>
.edit-field {
  margin-top: 20px;
}
.edit-submit {
  margin-top: 10px;
}
</style>
