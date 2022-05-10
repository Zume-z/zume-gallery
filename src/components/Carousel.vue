<template>
  <div>
    <Loader v-if="!loaded" class="absolute w-full h-full top-0 left-0" />
    <div :class="!loaded && 'opacity-0'">
      <div class="relative aspect-square w-full mt-20" @click="incrementIndex">
        <transition-group
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <template v-for="(image, i) in images" :key="i">
            <template v-if="image.videoUrl">
              <video
                v-show="activeIndex === i"
                :src="image.videoUrl"
                class="w-full h-full absolute top-0 left-0 object-contain pointer-events-none select-none"
                muted
                autoplay
                loop
              />
            </template>
            <template v-else>
              <img v-show="activeIndex === i" :src="image.imageUrl" class="w-full h-full absolute top-0 left-0 object-contain pointer-events-none select-none" />
            </template>
          </template>
        </transition-group>
      </div>
      <div class="flex w-full justify-center mt-2 text-4xl font-jura font-extralight">
        <div class="cursor-pointer select-none px-4 active:text-gray-300 duration-200 ease-in-out" @click="decrementIndex">&lt;</div>
        <div class="cursor-pointer select-none px-4 active:text-gray-300 duration-200 ease-in-out" @click="incrementIndex">></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ImageType } from '../config'
import Loader from './Loader.vue'
import Image from '../components/Image.vue'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  components: { Image, Loader },
  props: {
    images: {
      type: Array as PropType<ImageType[]>,
      required: true,
    },
  },
  data: () => ({
    loaded: false,
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
  mounted() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      e.code == 'ArrowRight' || e.code == 'Space' ? this.incrementIndex() : null
      e.code == 'ArrowLeft' ? this.decrementIndex() : null
    }),
    
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loaded = true;
      }
    }

  },
})
</script>
