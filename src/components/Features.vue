<template>
  <section
    class="py-20 bg-gradient-to-l from-primary-500 to-primary-950 text-white relative bg-gray-50"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        class="absolute h-16 w-screen top-0 bg-transparent"
      >
        <polygon fill="white" points="0,24 24,0 0,0" />
      </svg>
    </div>
    <div class="max-w-7xl mx-auto px-4 my-20 sm:px-6 lg:px-8">
      <div class="text-center mx-auto">
        <h2 class="text-subtitle text-white font-extrabold">
          Why Choose WCT Pay?
        </h2>
        <p class="mt-5 text-lg">
          Founded in 2008 and managed by leading payments, finance, tech and
          blockchain professionals, <br />
          WCT Pay’s crypto payment platform seamlessly integrates via API and
          offers fast settlement, low fees <br />
          and access to a global market.
        </p>
      </div>
      <div class="mt-16">
        <div
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-6 md:gap-x-8 md:gap-y-12"
        >
          <div v-for="feature in featureLists" class="col-span-2">
            <FeatureCard
              :img="feature.img"
              :title="feature.title"
              :content="feature.content"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        class="absolute h-16 w-screen bottom-0 bg-transparent"
      >
        <polygon fill="white" points="0,24 24,0 24,24" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from "./FeatureCard.vue";
import expertise from "../assets/icon/expertise.svg";

const featureLists = [
  {
    img: expertise,
    title: "Expertise",
    content: "WCT Pay is managed by industry-leading experts.",
  },
  {
    img: expertise,
    title: "Efficiency",
    content: "WCT Pay offers lightning-fast cryptocurrency payments.",
  },
  {
    img: expertise,
    title: "Global Market",
    content:
      "Cryptocurrency is borderless, giving you access to a global market.",
  },
  {
    img: expertise,
    title: "Zero Risk",
    content:
      "Instant crypto conversion ensures you have zero exposure to market volatility.",
  },
  {
    img: expertise,
    title: "Support",
    content: "Enjoy white glove service from a dedicated account manager.",
  },
  {
    img: expertise,
    title: "Innovation",
    content:
      "Stay ahead with WCT Pay as we continually innovate and add new features.",
  },
];
</script>

<style scoped></style>
