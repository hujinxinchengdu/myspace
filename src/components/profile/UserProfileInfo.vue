<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <img
            class="img-fluid"
            src="https://cdn.acwing.com/media/user/profile/photo/122062_lg_225e133429.jpg"
            alt=""
          />
        </div>
        <div class="col-9">
          <div class="username">{{ fullName }}</div>
          <div class="followers">Followers: {{ user.folloerCount }}</div>
          <button
            @click="follow"
            v-if="!user.is_followed"
            type="button"
            class="btn btn-secondary btn-sm"
          >
            Follow
          </button>
          <button
            @click="unfollow"
            v-if="user.is_followed"
            type="button"
            class="btn btn-secondary btn-sm"
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "UserProfileInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    let fullName = computed(
      () => props.user.lastname + " " + props.user.firstname
    );

    const follow = () => {
      context.emit("follow");
    };

    const unfollow = () => {
      context.emit("unfollow");
    };

    return {
      fullName,
      follow,
      unfollow,
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
}

.followers {
  font-size: 12px;
  color: gray;
}

button {
  pedding: 2px 4px;
  font-size: 12px;
}
</style>
