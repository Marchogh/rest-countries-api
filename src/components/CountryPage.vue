<template>
  <section>
    <router-link :to="{ name: 'Country'}">
      <button class="back">Back</button>
    </router-link>
    <div class="country-info">
      <img class="country-page-img" :src="data.flag" alt="flag" />
      <h2>{{data.name}}</h2>
      <p>
        <strong>Native Name:</strong>
        {{data.nativeName}}
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
      <p v-for="currency in data.currencies" :key="currency.code">
        <strong>Currency:</strong>
        {{currency.name}} - {{currency.symbol}}
      </p>
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
        `https://restcountries.com/v3.1/name/${this.$route.params.id}`
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
  color: var(--text);
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: var(--secondary-background);
  margin: 5rem 0;
  cursor: pointer;
}

.country-page-img {
  max-width: 600px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.country-info {
  font-size: 1.3rem;
}

.country-info > p {
  margin: 0.3rem 0;
}

@media screen and (max-width: 750px) {
  .country-page-img {
    height: 150px;
  }

  .country-info {
    font-size: 1rem;
  }

  .back {
    margin: 2rem 0;
  }
}
</style>
