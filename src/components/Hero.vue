<template>
  <section
    class="bg-gradient-to-b from-primary-200 pt-20 pb-12 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <div>
        <h1 class="text-[54px] font-semibold text-primary-600">
          <span ref="typedRef" class="text-primary-600 inline-block"> </span>
          <span v-show="currentIndex > 0" class="text-gray-900"
            >Crypto Payment Solutions</span
          >
        </h1>
        <p class="mt-3 text-xl text-gray-800">
          {{ texts[currentIndex].subTitle }}
        </p>
      </div>
      <div class="mt-8 flex justify-center space-x-4">
        <Button class="px-5 py-3 text-white">Get Started</Button>
        <Button
          class="bg-white ml-4 text-black hover:text-white px-5 py-3 hover:bg-primary-600"
          @click="scrollToContactUs"
          >Contact Us</Button
        >
      </div>
      <div class="mt-8">
        <img
          src="../assets/dashboard.png"
          alt="Dashboard"
          class="w-full max-w-4xl mx-auto"
        />
      </div>

      <transition name="slide-up">
        <div
          v-if="isPopupVisible"
          class="absolute text-left bottom-40 md:bottom-60 left-5 md:left-24 lg:left-64 bg-gradient-to-r rounded-xl from-amber-100 to-primary-200 bg-opacity-80 p-4 shadow-lg max-w-[400px]"
        >
          <div class="flex items-start gap-4">
            <img :src="texts[currentIndex].blockTwo.icon" alt="" />
            <div>
              <p class="text-gray-800">
                {{ texts[currentIndex].blockOne.title }}
              </p>
              <p class="text-sm text-gray-600 mt-2">
                {{ texts[currentIndex].blockOne.content }}
              </p>
            </div>
            <img src="@src/assets/icon/check-fill.svg" alt="" />
          </div>
        </div>
      </transition>
      <transition name="slide-up-second">
        <div
          v-if="isPopupVisible"
          class="absolute text-left left-5 md:left-32 bottom-10 md:bottom-32 lg:left-72 bg-gradient-to-r rounded-xl from-amber-100 to-primary-200 bg-opacity-80 p-4 shadow-lg max-w-[400px]"
        >
          <div class="flex items-start gap-4">
            <img :src="texts[currentIndex].blockTwo.icon" alt="" />
            <div>
              <p class="text-gray-800">
                {{ texts[currentIndex].blockTwo.title }}
              </p>
              <p class="text-sm text-gray-600 mt-2">
                {{ texts[currentIndex].blockTwo.content }}
              </p>
            </div>
            <img src="@src/assets/icon/check-fill.svg" alt="" />
          </div>
        </div>
      </transition>
    </div>

    <button
      class="size-20 md:size-48 rounded-full absolute top-1/3 border-2 border-primary-300 -left-10 md:-left-20 text-primary-600 text-2xl md:text-4xl pl-6 md:pl-12 hover:shadow-md"
      @click="toggleText"
    >
      &#8592;
    </button>

    <button
      class="size-20 md:size-48 rounded-full absolute top-1/3 border-2 border-primary-300 -right-10 md:-right-20 text-primary-600 text-2xl md:text-4xl pr-6 md:pr-12 hover:shadow-md"
      @click="toggleText"
    >
      &#8594;
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Button from "./Button.vue";
import Typed from "typed.js";
import User from "@src/assets/icon/user.svg";
import BlockChain from "@src/assets/icon/block-chain.svg";

const currentIndex = ref(0);
const isPopupVisible = ref(true);
const typedRef = ref(null);
const typed = ref(null);
let intervalId = null;
const texts = [
  {
    title: "Crypto Payment Solutions",
    subTitle: "Unlock a global market of 562 million crypto users.",
    blockOne: {
      icon: User,
      title: "Borderless Transactions",
      content: "Accept payments without geographical restrictions.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Future Proofing",
      content: "Start transacting in the currency of the future today.",
    },
  },
  {
    title: "Secure",
    subTitle: "Advanced encryption meets the immutability of blockchain.",
    blockOne: {
      icon: User,
      title: "Zero Fraud Risk",
      content: "Remove the risk of fraud and chargebacks.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Blockchain Immutability",
      content: "Secure, transparent, and tamper-proof payments.",
    },
  },
  {
    title: "Compliant",
    subTitle: "Regulated and compliant to give you peace-of-mind.",
    blockOne: {
      icon: User,
      title: "Committed to Compliance",
      content: "Fully licensed and compliant in multiple jurisdictions.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Stringent Onboarding",
      content: "Compliant with all KYC, KYB, AML and CFT regulations.",
    },
  },
  {
    title: "Fast",
    subTitle: "Lightning-fast settlement of all payments",
    blockOne: {
      icon: User,
      title: "Fast Settlement",
      content: "Enjoy faster settlements and payouts, reducing waiting times.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Vanquish Volatility",
      content: "No exposure to cryptocurrency market volatility.",
    },
  },

  {
    title: "Cost-Effective ",
    subTitle: "Low fees allow you to maximize your returns.",
    blockOne: {
      icon: User,
      title: "Lower Transaction Fees",
      content:
        "Benefit from competitive transaction fees and eliminate fraudulent chargebacks.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Increased Profits",
      content: "Raise revenues with lower fees and access to a new market.",
    },
  },
  {
    title: "Customizable",
    subTitle: "Tailor-made payment solutions to suit your business needs.",
    blockOne: {
      icon: User,
      title: "Full-Service Platform",
      content: "Manage your payments via our web-based platform",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Tailored Tech",
      content: "Customizable data feeds with the ability to white label.",
    },
  },
  {
    title: "Unparalleled ",
    subTitle: "White-glove service from a dedicated account manager.",
    blockOne: {
      icon: User,
      title: "Personalized Service",
      content: "Enjoy the benefits of a dedicated, personal account manager.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "24/7 Support",
      content: "Never miss a payment with 24/7 omnichannel tech support.",
    },
  },
  {
    title: "Seamless ",
    subTitle: "Seamless and cost-free tech integration and support.",
    blockOne: {
      icon: User,
      title: "Free Set Up",
      content:
        "Accept crypto payments without the cost of developing or licensing.",
    },
    blockTwo: {
      icon: BlockChain,
      title: "Seamless Integration",
      content: "API-based, plug-and-play solution to minimize admin and time.",
    },
  },
];
const currentText = ref("Compliant");

function scrollToContactUs() {
  const element = document.getElementById("contact-us");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleText() {
  currentIndex.value = (currentIndex.value + 1) % texts.length;
  currentText.value = texts[currentIndex.value].title;

  if (typed.value && typed.value.constructor === Typed) {
    typed.value.destroy();
  }
  typed.value = new Typed(typedRef.value, {
    strings: [currentText.value],
    typeSpeed: 150,
    backSpeed: 150,
    onComplete: (self) => {
      // let cursor = document.querySelector(".typed-cursor");
      // setTimeout(function () {
      //   cursor.style.opacity = 0;
      // }, 1000);
    },
  });

  togglePopup();
  setTimeout(() => {
    if (!isPopupVisible.value) togglePopup();
  }, 500);
}

function togglePopup() {
  isPopupVisible.value = !isPopupVisible.value;
}

onMounted(() => {
  typed.value = new Typed(typedRef.value, {
    strings: [texts[currentIndex.value].title],
    typeSpeed: 100,
    onComplete: (self) => {
      // let cursor = document.querySelector(".typed-cursor");
      // setTimeout(function () {
      //   cursor.style.opacity = 0;
      // }, 1000);
    },
  });

  // popup duration 5s
  intervalId = setInterval(toggleText, 5000);
});

onUnmounted(() => {
  if (typed.value && typed.value.constructor === Typed) {
    typed.value.destroy();
  }
});
</script>

<style scoped>
/* .hero-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

.hero-text {
  position: absolute;
} */

.slide-up-enter-active,
.slide-up-leave-active,
.slide-up-second-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-up-second-enter-active {
  transition: all 0.8s ease-in-out;
}
.slide-up-enter-from,
.slide-up-leave-to,
.slide-up-second-enter-from,
.slide-up-second-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
