<template>
  <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 self-start gap-4">
    <div @click="selectedImageIndex = i" v-for="(image, i) in filteredImages" class="relative w-full bg-cover bg-center">
      <div
        class="relative w-full aspect-w-16 aspect-h-9 bg-cover bg-center cursor-pointer transition duration-300 ease-in-out"
        :class="activeImageIndex !== null && activeImageIndex == i && 'opacity-20'"
        :style="{ backgroundImage: `url(${image.url})` }"
      ></div>

      <div class="cursor-pointer transition duration-300 ease-in-out opacity-0" :class="activeImageIndex !== null && activeImageIndex == i && 'opacity-100'">{{ image.title }}</div>
      <div
        class="absolute top-1/2 left-1/2 w-full h-full p-2 box-content transform -translate-x-1/2 -translate-y-1/2"
        @mouseenter="activeImageIndex = i"
        @mouseleave="activeImageIndex = null"
      />
    </div>

    <transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    >
      <Project
        :image="selectedImage"
        :imageIndex="selectedImageIndex"
        :totalImages="filteredImages.length"
        @closeModal="selectedImageIndex = null"
        v-if="selectedImage && selectedImageIndex !== null"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import config from '../config'
import Project from './Project.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    Project,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    madeWith: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    activeImageIndex: null as null | number,
    selectedImageIndex: null as null | number,
  }),
  computed: {
    selectedImage() {
      return this.selectedImageIndex !== null ? config.images[this.selectedImageIndex] : null
    },
    filteredImages() {
      if (this.category === 'all') {
        return config.images
      } else {
        return config.images.filter((image) => image.categories.includes(this.category))
      }
    },
  },
})
</script>
