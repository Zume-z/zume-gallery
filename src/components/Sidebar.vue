<template>
  <!-- MOBILE = sm: hidden -->
  <div class="sm:hidden fixed top-0 z-4 self-start w-screen bg-white bg-opacity-80 backdrop-blur-xl backdrop-saturate-200">
    <div class="grid grid-flow-row mt-4 relative space-y-4 z-10 p-4 self-top" @click="mobFilter">
      <div class="w-4 bg-black h-px" />
      <div class="w-4 bg-black h-px" />
      <div class="w-4 bg-black h-px" />
    </div>
  </div>

  <div class="sm:hidden grid top-0 z-0 self-start w-screen bg-white">
    <div class="grid grid-flow-row mt-4 relative space-y-4 z-10 p-4 self-top" @click="mobFilter">
      <div class="w-4 bg-black h-px" />
      <div class="w-4 bg-black h-px" />
      <div class="w-4 bg-black h-px" />
    </div>
  </div>

  <div class="fixed top-0 w-screen z-10 transition duration-300 ease-in-out" :class="mobActive ? 'opacity-1 z-30' : 'opacity-0 z-0'">
    <div class="sm:hidden sm:p-16 top-0 bg-white sticky text-black z-10 text-center p-3">
      <button class="pt-8 pl-4 text-[50px] absolute top-0 left-0 outline-none font-jura font-light black-gray-50" @click="mobFilter">x</button>
      <router-link to="/" class="grid p-8 uppercase" @click="mobFilter">Projects</router-link>
      <router-link to="/code" class="grid p-8 uppercase" @click="mobFilter">Code</router-link>
      <router-link to="/graphics" class="grid p-8 uppercase" @click="mobFilter"> Graphics </router-link>
      <router-link to="/sounddesign" class="grid p-8 uppercase" @click="mobFilter">Sound</router-link>
      <router-link to="/zero" class="grid p-8 uppercase" @click="mobFilter">OOOO</router-link>
    </div>
  </div>

  <div class="hidden sm:block relative p-8 flex-shrink-0 z-10" @mouseenter="menuActive = true" @mouseleave="menuActive = false">
    <!-- DESKTOP Sidebar Menu Icon -->
    <div class="sticky top-16 z-10">
      <div
        class="grid grid-flow-row w-4 relative z-10 cursor-pointer duration-300 ease-in-out"
        :class="
          menuActive && developActive
            ? 'gap-0 top-[52px]'
            : menuActive && graphicsActive
            ? 'gap-0 top-[80px]'
            : menuActive && soundActive
            ? 'gap-0 top-[108px]'
            : menuActive && zeroActive
            ? 'gap-0 top-[136px]'
            : menuActive
            ? 'gap-0 top-[24px]'
            : 'gap-5 top-0'
        "
      >
        <div class="w-8 h-px duration-500 ease-in-out" :class="menuActive ? 'bg-white' : 'bg-black'" />
        <div class="w-8 bg-black h-px" />
        <!-- <div class="w-7 h-px duration-500 ease-in-out" :class=" menuActive ? 'bg-white' :  'bg-black' " /> -->
      </div>
      <!-- Sidebar List -->
      <div class="absolute top-4 px-10 z-10 text-black transition duration-500 ease-in-out leading-normao font-Nb text-[18px]" :class="menuActive ? 'opacity-1' : 'opacity-0'">
        <router-link to="/" class="grid uppercase pb-2">Projects</router-link>
        <router-link to="/code" class="grid uppercase pb-2" @mouseenter="developActive = true" @mouseleave="developActive = false">Code</router-link>
        <router-link to="/graphics" class="grid uppercase pb-2" @mouseenter="graphicsActive = true" @mouseleave="graphicsActive = false"> Graphics </router-link>
        <router-link to="/sounddesign" class="grid uppercase pb-2" @mouseenter="soundActive = true" @mouseleave="soundActive = false">Sound</router-link>
        <router-link to="/zero" class="grid uppercase pb-2" @mouseenter="zeroActive = true" @mouseleave="zeroActive = false">OOOO</router-link>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 h-72 w-screen bg-gradient-to-r from-white to-white pointer-events-none transition duration-500 ease-in-out"
      :class="menuActive ? 'opacity-1' : 'opacity-0'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  data: () => ({
    menuActive: false,
    developActive: false,
    graphicsActive: false,
    soundActive: false,
    zeroActive: false,
    mobActive: false,
  }),

  methods: {
    mobFilter: function () {
      this.mobActive = !this.mobActive
    },
  },
})
</script>
