<template>
  <div>
    <div class="relative aspect-square w-full" @click="incrementIndex">
      <transition-group
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <template v-for="(image, i) in images" :key="image.imageUrl">
          <img v-show="activeIndex === i" :src="image.imageUrl" class="w-full h-full absolute top-0 left-0 object-contain pointer-events-none select-none" />
        </template>
      </transition-group>
    </div>
    <div class="flex space-x-2 w-full justify-center mt-4 text-5xl font-extralight">
      <!-- <div class="cursor-pointer select-none" @click="decrementIndex">&#8592;</div> -->
      <!-- <div class="cursor-pointer select-none" @click="incrementIndex">&#8594;</div> -->
      <div class="cursor-pointer select-none px-4 active:text-gray-300 duration-200 ease-in-out" @click="decrementIndex">&lt;</div>
      <div class="cursor-pointer select-none px-4 active:text-gray-300 duration-200 ease-in-out" @click="incrementIndex">></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ImageType } from '../config'
import Image from '../components/Image.vue'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  components: { Image },
  props: {
    images: {
      type: Array as PropType<ImageType[]>,
      required: true,
    },
  },
  data: () => ({
    activeIndex: 0,
  }),
  methods: {
    incrementIndex() {
      this.activeIndex = this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1
      this.$emit('onIndexChange', this.activeIndex)
    },
    decrementIndex() {
      this.activeIndex = this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1
      this.$emit('onIndexChange', this.activeIndex)
    },
  },
})
</script>
