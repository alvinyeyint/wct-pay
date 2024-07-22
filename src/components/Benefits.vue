<template>
  <section class="py-12 relative">
    <div class="py-10">
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
        <h2 class="text-subtitle">What are the Benefits of Crypto Payments?</h2>
        <p class="text-gray-600 mt-3 text-xl leading-[30px]">
          Whether you are a payment service provider, or a merchant, accepting
          crypto <br />
          payments unlocks a wide range of benefits.
        </p>
      </div>
      <div class="mt-16 grid grid-cols-6 gap-8">
        <div
          v-for="benefit in benefits"
          class="col-span-6 md:col-span-3 lg:col-span-2"
        >
          <BenefitCard
            :img="benefit.img"
            :label="benefit.label"
            :content="benefit.content"
          ></BenefitCard>
        </div>
      </div>
    </div>
    <div class="py-10">
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
import BenefitCard from "./BenefitCard.vue";
import GlobalMarket from "../assets/icon/benefit/global-market.svg";
import Borderless from "../assets/icon/benefit/borderless.svg";
import Chargeback from "../assets/icon/benefit/chargeback.svg";
import Decentralized from "../assets/icon/benefit/decentralized.svg";
import EnhancedSecurity from "../assets/icon/benefit/enhanced-security.svg";
import Industry from "../assets/icon/benefit/industry.svg";
import Settlement from "../assets/icon/benefit/settlement.svg";
import Transition from "../assets/icon/benefit/transition.svg";
import Transparency from "../assets/icon/benefit/transparency.svg";

const benefits = [
  {
    img: GlobalMarket,
    label: "Access a Global Market",
    content:
      "Unlock an untapped market of 562 million crypto users across the world.",
  },
  {
    img: EnhancedSecurity,
    label: "Enhanced Security",
    content:
      "Advanced encryption and blockchain technology ensure secure transactions",
  },
  {
    img: Settlement,
    label: "Fast Settlement",
    content: "Same-day settlement for all transactions. ",
  },
  {
    img: Transition,
    label: "Lower Transaction Fee",
    content: "Reduced costs compared to traditional payment methods.",
  },
  {
    img: Chargeback,
    label: "No Chargebacks",
    content: "Zero risk of fraud eliminates chargeback risk for merchants. ",
  },
  {
    img: Industry,
    label: "Industry Versatility ",
    content:
      "Suitable for various sectors: retail, insurance, real estate, etc ",
  },
  {
    img: Transparency,
    label: "Transparency",
    content: "Clear and immutable transaction records.",
  },
  {
    img: Borderless,
    label: "Borderless Transactions",
    content: "No geographical limitations on payments.",
  },
  {
    img: Decentralized,
    label: "Decentralized",
    content: "No reliance on central banks or financial institutions.",
  },
];
</script>

<style scoped></style>
