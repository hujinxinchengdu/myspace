<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >My Space
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/"> Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/userlist"> Friends </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/userprofile"> Posts </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/login"> Login </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register"> Register </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
