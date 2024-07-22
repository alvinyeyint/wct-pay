<script setup>
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Industries from "./components/Industries.vue";
import Benefits from "./components/Benefits.vue";
import TransformingBusiness from "./components/TransformingBusiness.vue";
import CryptoPayment from "./components/CryptoPayment.vue";
import Merchant from "./components/Merchant.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  document.title = "Wct | Pay";
});
</script>

<template>
  <Header />

  <Hero />

  <CryptoPayment />

  <Features />

  <Merchant />

  <Industries />

  <Benefits />

  <TransformingBusiness />

  <Contact />

  <Footer />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
