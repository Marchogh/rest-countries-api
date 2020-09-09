<template>
  <section class="search-section">
    <div class="search-wrapper">
      <input
        v-model="search"
        class="search-input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
    <select v-model="filter" class="filter" name="region">
      <option value disabled selected hidden>Filter by region</option>
      <option value>All</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "SearchFilter",
  props: {
    data: Array,
  },
  data() {
    return {
      search: "",
      filter: "",
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search);
    },
    filter() {
      this.$emit("filter", this.filter);
    },
  },
};
</script>

<style>
.search-section {
  display: flex;
  margin: 5rem;
}

.search-wrapper {
  flex-grow: 1;
}

.search-wrapper > input {
  padding: 1.1rem 4rem;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  box-shadow: var(--box-shadow);
  background-color: white;
  width: 30%;
}

.search-input {
  background: url("~@/assets/search.svg") no-repeat scroll 20px 20px;
  background-size: 17px 17px;
}

.filter {
  padding: 1rem;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  border: none;
}
</style>
