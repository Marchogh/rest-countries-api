<template>
  <header class="header">
    <h1 class="logo">Where in the world?</h1>
    <img class="moon" :src="require(`@/assets/moon.svg`)" alt="moon" />
    <div class="color-switcher">
      <button class="darkmode-btn">Dark Mode</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  display: flex;
  padding: 2rem 5rem;
  background: var(--white);
  box-shadow: var(--box-shadow);
}

.logo {
  flex-grow: 1;
  font-weight: 800;
}

.color-switcher {
  display: flex;
}

.moon {
  width: 20px;
}

.darkmode-btn {
  font-size: 18px;
  background: none;
  border: none;
}
</style>
