<template>
  <div>
    <div class="flex gap-2 items-center">
      <img :src="props.img" alt="Icon 1" class="h-12 w-12" />
      <span class="text-xl leading-6 font-semibold text-primary-600">
        {{ props.content }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>
