<template>
  <section class="py-20 bg-gray-50 relative">
    <div class="py-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        class="absolute h-24 w-screen top-0 bg-transparent"
      >
        <polygon fill="white" points="0,24 24,0 0,0" />
      </svg>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-subtitle">Industries We Serve</h2>
        <p class="text-gray-800 mt-3">
          <span class="text-primary-600">WCT Pay’s</span> API-based and modular
          solution seamlessly provides crypto payment solutions to a wide range
          of industries.
        </p>
      </div>
      <div class="mt-10">
        <vue-marquee-slider id="marquee-slider" :speed="25000" :space="100">
          <div class="" v-for="(service, index) in services" :key="index">
            <IndustryCard :img="service.img" :content="service.content" />
          </div>
        </vue-marquee-slider>
      </div>
    </div>
    <div class="py-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        class="absolute h-24 w-screen bottom-0 bg-transparent"
      >
        <polygon fill="white" points="0,24 24,0 24,24" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/node_modules/vue3-marquee-slider/dist/style.css";

import IndustryCard from "./IndustryCard.vue";
import payment from "../assets/icon/payment.svg";
import cashier from "../assets/icon/cashier.svg";
import platform from "../assets/icon/platform.svg";
import insurance from "../assets/icon/insurance.svg";
import aviation from "../assets/icon/aviation.svg";
import yacht from "../assets/icon/yacht.svg";

const services = [
  {
    img: payment,
    content: "Payment Service Providers",
  },
  {
    img: cashier,
    content: "Cashiers",
  },
  {
    img: platform,
    content: "CFD Platforms",
  },
  {
    img: insurance,
    content: "CFD Platforms",
  },
  {
    img: aviation,
    content: "Aviation Industry",
  },
  {
    img: yacht,
    content: "Yachting Industry",
  },
  {
    img: yacht,
    content: "Gaming platform",
  },
  {
    img: yacht,
    content: "Sports Betting",
  },
  {
    img: yacht,
    content: "Luxuary Retailers",
  },
];
</script>
