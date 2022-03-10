<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex-1 flex justify-center items-center">
      <Carousel class="w-full max-w-3xl" :images="images" @onIndexChange="activeImageIndex = $event" />
    </div>
    <div class="flex justify-center p-6 gap-3">
      <a class="hover:underline" href="https://github.com/Zume-z" target="_blank">Zume</a>
      <a class="text-black">.</a>
      <a class="text-black">{{ datetime }}</a>
      <a class="text-black">.</a>
      <a class="text-black">{{ activeImageIndex + 1 }}/45</a>
    </div>
  </div>
</template>

<script lang="ts">
import { config } from '../config'
import Carousel from '../components/Carousel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Carousel,
  },
  data: () => ({
    activeImageIndex: 0,
    images: config.images,
    currentDate: new Date(),
  }),
  computed: {
    datetime() {
      return this.currentDate.getHours() + ':' + this.currentDate.getMinutes() + ':' + this.currentDate.getSeconds()
    },
  },
})
</script>
