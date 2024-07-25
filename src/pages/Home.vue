<script setup>
import { onMounted } from "vue";
import Hero from "@src/components/Hero.vue";
import Features from "@src/components/Features.vue";
import Industries from "@src/components/Industries.vue";
import Benefits from "@src/components/Benefits.vue";
import TransformingBusiness from "@src/components/TransformingBusiness.vue";
import CryptoPayment from "@src/components/CryptoPayment.vue";
import Merchant from "@src/components/Merchant.vue";
import Contact from "@src/components/Contact.vue";

onMounted(() => {
  document.title = "Wct | Pay";
});
</script>

<template>
  <Hero />

  <CryptoPayment />

  <Features />

  <Merchant />

  <Industries />

  <Benefits />

  <TransformingBusiness />

  <Contact />
</template>
