<template>
  <section class="country-section">
    <div class="country-item" v-for="country in data" :key="country.name">
      <img class="country-image" :src="country.flag" alt="flag" />
      <div class="country-stats">
        <h2 class="country-name">{{ country.name }}</h2>
        <p>
          <strong>Population:</strong>
          {{country.population}}
        </p>
        <p>
          <strong>Region:</strong>
          {{country.region}}
        </p>
        <p>
          <strong>Capital:</strong>
          {{country.capital}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Country",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getCountries();
  },
  methods: {
    async getCountries() {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>

<style>
.country-section {
  margin: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;
}
.country-item {
  background: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
}

.country-image {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.country-stats {
  padding: 1.5rem 2rem;
  margin-bottom: 0.5rem;
}

.country-stats > p {
  margin: 0.2rem 0;
}

.country-name {
  font-weight: 600;
  margin-bottom: 1.5rem;
}
</style>
