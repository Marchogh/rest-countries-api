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
  margin: 5rem 0;
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
  width: 30%;
}

.search-input {
  background: url("~@/assets/search.svg") no-repeat scroll 20px 20px;
  background-size: 17px 17px;
  background-color: var(--secondary-background);
  color: var(--text);
}

.search-input::placeholder {
  color: var(--subtle-text);
}

.filter {
  padding: 1rem;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  background: var(--secondary-background);
  color: var(--text);
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 750px) {
  .search-section {
    margin: 3rem 0;
    flex-direction: column;
  }
  .search-wrapper > input {
    font-size: 14px;
    width: 100%;
    margin-bottom: 1rem;
  }
  .filter {
    font-size: 14px;
    width: 50%;
  }
}
</style>
