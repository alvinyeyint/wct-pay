<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  class: {
    type: String,
    required: false,
    default: "",
  },
});

const className = computed(() => {
  return `"relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" ${props.class}`;
});
</script>
