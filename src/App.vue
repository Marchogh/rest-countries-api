<template>
  <div id="app">
    <Header />
    <SearchFilter />
    <Country />
  </div>
</template>

<script>
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import Country from "./components/Country";

export default {
  name: "App",
  components: {
    Header,
    SearchFilter,
    Country,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

:root {
  --light-bg: hsl(0, 0%, 98%);
  --dark-bg: hsl(207, 26%, 17%);
  --dark-blue: hsl(209, 23%, 22%);
  --light-text: hsl(200, 15%, 8%);
  --dark-gray: hsl(0, 0%, 52%);
  --white: hsl(0, 0%, 100%);
  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

html {
  box-sizing: border-box;
  background: var(--light-bg);
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
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

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
