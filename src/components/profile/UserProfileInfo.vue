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
          <div class="username">Jinxin Hu</div>
          <div class="followers">Followers: 123</div>
          <button type="button" class="btn btn-secondary btn-sm">Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileInfo",
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
