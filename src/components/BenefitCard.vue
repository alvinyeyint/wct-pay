<template>
  <div :class="classObject" @click="handleToggleOpen">
    <div class="flex gap-4 items-start">
      <img :src="img" alt="" />
      <div class="flex-1 pt-4">
        <div class="flex items-center">
          <p class="flex-1 text-xl font-medium">
            {{ label }}
          </p>
          <svg
            :class="[
              'transition-transform duration-300',
              isOpened ? 'rotate-180' : 'rotate-0',
            ]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5 7.96338L10 12.9634L15 7.96338"
              :stroke="isOpened ? '#fff' : '#667085'"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          :class="[
            'pt-4 overflow-hidden transition-all ease-in-out duration-100',
            isOpened ? 'max-h-96 h-full text-white' : 'max-h-0',
          ]"
        >
          <p>
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  img: String,
  label: String,
  content: String,
});

const isOpened = ref(false);

const classObject = computed(() => ({
  "rounded-3xl border border-gray-50 shadow-sm px-6 py-4 transition-all ease-in-out duration-100 cursor-pointer bg-white text-gray-600": true,
  "bg-gradient-to-b from-primary-400 to-primary-700 text-white h-full":
    isOpened.value,
}));

function handleToggleOpen() {
  isOpened.value = !isOpened.value;
}
</script>
