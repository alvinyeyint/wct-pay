<template>
  <footer
    class="py-20 bg-gradient-to-b from-primary-900 to-primary-950 text-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-white">
        <img class="h-8 w-auto" src="../assets/wct-pay-light.svg" alt="Logo" />
      </div>
      <div class="my-10 md:flex justify-between items-center">
        <nav class="flex flex-wrap space-x-6 text-white mb-4">
          <a
            v-for="menu in menuLinks"
            href="#"
            class="hover:text-primary-300"
            >{{ menu.name }}</a
          >
        </nav>

        <div>
          <Button>Get Started</Button>
          <Button
            class="bg-white ml-4 text-black hover:text-white hover:bg-primary-600"
            >Contact Us</Button
          >
        </div>
      </div>
      <p class="uppercase">Contact Details</p>
      <p class="py-5">
        WCT pay <br />
        3/99 Racecourse Road, Ascot 4012, Queensland Australia
      </p>
      <div class="flex gap-8">
        <img src="../assets/icon/facebook.svg" alt="" />
        <img src="../assets/icon/twitter.svg" alt="" />
        <img src="../assets/icon/linkedIn.svg" alt="" />
      </div>

      <hr class="border-primary-600 my-8" />

      <div class="flex flex-col gap-4 md:flex-row justify-between">
        <p>&copy; 2024 WCT Pay. All rights reserved.</p>
        <div class="space-x-4 text-primary-400">
          <router-link to="/terms">Terms of conditions</router-link>
          <span> | </span>
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <span> | </span>
          <router-link to="cookie-notice">Cookies Notice</router-link>
          <span> | </span>
          <span>Modern Slavery Statement</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from "./Button.vue";
const menuLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/",
  },
  {
    name: "Services",
    to: "/",
  },
  {
    name: "Solutions",
    to: "/",
  },
  {
    name: "Regulatory",
    to: "/",
  },
  {
    name: "Benefits",
    to: "/",
  },
  {
    name: "Contact Us",
    to: "/",
  },
];
</script>

<style scoped></style>
