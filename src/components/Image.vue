<template>
  <div class="w-full flex">
    <img class="w-full cursor-pointer" :src="url" @click="enterFullscreen" />
    <div v-if="fullscreen" class="fixed top-0 left-0 w-full h-full p-6 bg-white cursor-pointer">
      <div @scroll.prevent @click="exitFullscreen" class="w-full h-full bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${url})` }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    fullscreen: false,
  }),
  methods: {
    enterFullscreen() {
      this.fullscreen = true
      // document.querySelector('body').style.overflow = 'hidden'
    },
    exitFullscreen() {
      this.fullscreen = false
      // document.querySelector('body').style.overflow = 'auto'
    },
  },
})
</script>
