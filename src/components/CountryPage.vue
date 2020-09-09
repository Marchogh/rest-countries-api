<template>
  <section>
    <router-link :to="{ name: 'Country'}">
      <button class="back">Back</button>
    </router-link>
    <div class="country-info">
      <img class :src="data.flag" alt="flag" />
      <h2>{{data.name}}</h2>
      <p>
        <strong>Native Name:</strong>
        {{data.nativename}}
      </p>
      <p>
        <strong>Population:</strong>
        {{data.population}}
      </p>
      <p>
        <strong>Region:</strong>
        {{data.region}}
      </p>
      <p>
        <strong>Sub Region:</strong>
        {{data.subregion}}
      </p>
      <p>
        <strong>Capital:</strong>
        {{data.capital}}
      </p>
      <div class="border-countries"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountryPage",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getCountry();
  },
  methods: {
    async getCountry() {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.id}`
      );
      const data = await res.json();
      this.data = data[0];
    },
  },
};
</script>

<style>
.back {
  border: none;
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  background-color: var(--white);
  margin: 5rem;
}
</style>
