<template>
  <section
    class="bg-gradient-to-b from-primary-200 pt-20 pb-12 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div>
        <h1 class="text-[54px] font-semibold text-primary-600">
          <span ref="typedRef" class="text-primary-600 inline-block"> </span>
          <span class="text-gray-900">Crypto Payment Solutions</span>
        </h1>
        <p v-if="isTextOne" class="mt-3 text-xl text-gray-800">
          Regulated and compliant to give you peace-of-mind.
        </p>
        <p v-else class="mt-3 text-xl text-gray-800">
          Advanced encryption meets the immutability of blockchain.
        </p>
      </div>
      <div class="mt-8 flex justify-center space-x-4">
        <Button class="px-5 py-3 text-white">Get Started</Button>
        <Button
          class="bg-white ml-4 text-black hover:text-white px-5 py-3 hover:bg-primary-600"
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
    </div>

    <transition name="slide-up">
      <div
        v-if="isPopupVisible"
        class="absolute bottom-40 md:bottom-60 left-5 md:left-36 lg:left-80 bg-gradient-to-r rounded-xl from-amber-100 to-primary-200 bg-opacity-80 p-4 shadow-lg"
      >
        <div v-if="isTextOne" class="flex items-start gap-4">
          <img src="@src/assets/icon/check-icon-2.svg" alt="" />
          <div>
            <p class="text-gray-800">Committed to Compliance</p>
            <p class="text-sm text-gray-600 mt-2">
              Fully licensed and compliant in multiple <br />
              jurisdictions.
            </p>
          </div>
          <img src="@src/assets/icon/check-fill.svg" alt="" />
        </div>
        <div v-else class="flex items-start gap-4">
          <img src="@src/assets/icon/lock.svg" alt="" />
          <div>
            <p class="text-gray-800">Zero Fraud Risk</p>
            <p class="text-sm text-gray-600 mt-2">
              Remove the risk of fraud and chargebacks.
            </p>
          </div>
          <img src="@src/assets/icon/check-fill.svg" alt="" />
        </div>
      </div>
    </transition>
    <transition name="slide-up-second">
      <div
        v-if="isPopupVisible"
        class="absolute left-5 md:left-44 bottom-10 md:bottom-32 lg:left-96 bg-gradient-to-r rounded-xl from-amber-100 to-primary-200 bg-opacity-80 p-4 shadow-lg"
      >
        <div v-if="isTextOne" class="flex items-start gap-4">
          <img src="@src/assets/icon/user.svg" alt="" />
          <div>
            <p class="text-gray-800">Stringent Onboarding</p>
            <p class="text-sm text-gray-600 mt-2">
              Compliant with all KYC, KYB, AML and PEP <br />
              regulations.
            </p>
          </div>
          <img src="@src/assets/icon/check-fill.svg" alt="" />
        </div>
        <div v-else class="flex items-start gap-4">
          <img src="@src/assets/icon/block-chain.svg" alt="" />
          <div>
            <p class="text-gray-800">Blockchain Immutability</p>
            <p class="text-sm text-gray-600 mt-2">
              Secure, transparent, and tamper-proof <br />
              payments.
            </p>
          </div>
          <img src="@src/assets/icon/check-fill.svg" alt="" />
        </div>
      </div>
    </transition>

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

const isTextOne = ref(true);
const isPopupVisible = ref(true);
const typedRef = ref(null);
const typed = ref(null);
const currentText = ref("Compliant");

function toggleText() {
  isTextOne.value = !isTextOne.value;

  currentText.value = isTextOne.value ? "Compliant" : "Secure";

  if (typed.value && typed.value.constructor === Typed) {
    typed.value.destroy();
  }
  typed.value = new Typed(typedRef.value, {
    strings: [currentText.value],
    typeSpeed: 150,
    onComplete: (self) => {
      let cursor = document.querySelector(".typed-cursor");
      setTimeout(function () {
        cursor.style.opacity = 0;
      }, 1000);
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
    strings: ["Compliant"],
    typeSpeed: 150,
    onComplete: (self) => {
      let cursor = document.querySelector(".typed-cursor");
      setTimeout(function () {
        cursor.style.opacity = 0;
      }, 1000);
    },
  });
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
