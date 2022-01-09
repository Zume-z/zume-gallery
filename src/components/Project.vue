<template>
  <div class="fixed w-full h-full flex bg-white p-8 top-0 left-0 z-10">
    <button class="pt-4 pl-8 text-[70px] absolute top-0 left-0 outline-none font-light font-jura text-gray-900" @click="closeModal">x</button>
    <video v-if="image.mp4" :src="image.mp4" autoplay loop class="w-1/2" />
    <div v-else class="bg-contain bg-no-repeat bg-center w-1/2" :style="{ backgroundImage: `url(${image.url})` }" />
    <div class="w-1/2 flex flex-col justify-center text-black p-8 font-Nb">
      <div class="flex space-x-4 text-center justify-center">{{ image.title }} | {{ image.dateUploaded }}</div>
      <div class="flex space-x-4 text-center justify-center">
        {{ image.madeWith }}
      </div>
    </div>
    <div class="fixed w-full h-2 flex p-4 bottom-0 left-0 z-10 justify-center font-Nb">
      <div class="flex space-x-4 z-20 items-end">
        <div class="flex space-x-4 justify-center">
          <a class="text-black uppercase">Saliva</a>
          <a class="text-black">{{ dateTime }}</a>
          <a class="text-black">{{ imageIndex + 1 }}/{{ totalImages }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  props: {
    image: {
      required: true,
      type: Object,
    },
    imageIndex: {
      required: true,
      type: Number,
    },
    totalImages: {
      required: true,
      type: Number,
    },
  },
  data: () => ({
    dateTime: '',
    isUnmounted: false,
  }),
  created() {
    this.dateTime = this.getDateTime()
    this.updateDateTime()
  },
  unmounted() {
    this.isUnmounted = true
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    getDateTime() {
      const currentDate = new Date()
      return currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
    },
    updateDateTime() {
      setTimeout(() => {
        this.dateTime = this.getDateTime()
        if (!this.isUnmounted) this.updateDateTime()
      }, 1000)
    },
  },
})
</script>
