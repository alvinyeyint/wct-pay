<template>
  <header
    :class="isMenuOpen ? 'bg-white' : headerClass"
    class="fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center gap-8 h-full">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-auto cursor-pointer"
              src="../assets/wct-pay.svg"
              alt="Logo"
              @click="refreshPage"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              v-for="menu in menuLinks"
              :key="menu.name"
              :href="menu.to"
              class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 hover:border-primary-600 border-transparent"
              >{{ menu.name }}</a
            >
          </div>
        </div>
        <button @click="toggleMenu" class="md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div class="hidden sm:flex items-center">
          <div class="flex-shrink-0">
            <Button
              class="text-black mr-3 bg-transparent shadow-none hover:text-white hover:bg-primary-600"
            >
              Sign In
            </Button>
            <Button> Sign Up </Button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isMenuOpen"
      class="md:hidden text-white text-center transition-all ease-in-out duration-100"
    >
      <a
        v-for="menu in menuLinks"
        href="#"
        class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
      >
        {{ menu.name }}
      </a>
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
        >Sign In</a
      >
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
        >Sign Up</a
      >
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";

const router = useRouter();

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

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const headerClass = computed(() => {
  return {
    "bg-transparent": !isScrolled.value,
    "bg-white shadow-md": isScrolled.value,
  };
});

const refreshPage = () => {
  // window.location.reload();
  console.log("here");
  router.push({ path: "/" });
};

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
