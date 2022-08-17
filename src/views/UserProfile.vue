<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import UserProfileInfo from "../components/profile/UserProfileInfo.vue";
import UserProfilePosts from "../components/profile/UserProfilePosts.vue";
import UserProfileWrite from "../components/profile/UserProfileWrite.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "UserPosts",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {
    // const route = useRoute();
    // const userId = route.params.userId;

    const user = reactive({
      id: 1,
      username: "Jinxin Hu",
      lastname: "Hu",
      firstname: "Jinxin",
      folloerCount: 0,
      is_followed: false,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "Today is a nice day",
        },
        {
          id: 2,
          userId: 1,
          content: "Today I feel so happy, beacause I study",
        },
        {
          id: 3,
          userId: 1,
          content: "Today it's raining",
        },
      ],
    });

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.folloerCount++;
    };

    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.folloerCount--;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
    };

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>
