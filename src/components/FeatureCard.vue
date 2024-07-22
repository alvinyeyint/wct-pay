<template>
  <div
    class="p-6 bg-white hover:bg-gradient-to-b from-primary-400 to-primary-700 hover:text-white transition-all duration-300 ease-in-out rounded-2xl shadow-lg text-primary-900 text-center mt-5"
  >
    <div class="-mt-14">
      <img :src="props.img" alt="Expertise" class="size-18 mx-auto" />
    </div>
    <h3 class="mt-4 text-xl font-semibold leading-9">
      {{ props.title }}
    </h3>
    <p class="mt-2 text-base leading-6">
      {{ props.content }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

console.log(props.img);
</script>
