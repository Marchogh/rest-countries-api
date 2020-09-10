<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

:root {
  --background-color: hsl(0, 0%, 98%);
  --secondary-background: hsl(0, 0%, 100%);
  --text: hsl(200, 15%, 8%);
  --subtle-text: hsl(0, 0%, 60%);
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dark {
  --background-color: hsl(207, 26%, 17%);
  --secondary-background: hsl(209, 23%, 22%);
  --text: hsl(0, 0%, 100%);
  --subtle-text: hsl(0, 0%, 100%);
}

html {
  box-sizing: border-box;
  background: var(--background-color);
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  color: var(--text);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: inherit;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.wrapper {
  margin: 0 5rem;
}

@media screen and (max-width: 750px) {
  .wrapper {
    margin: 0 1.5rem;
  }
}
</style>
