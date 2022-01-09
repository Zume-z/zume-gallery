<template>
  <div class="sm:flex w-full sm:min-h-screen sm:flex-row">
    <Sidebar />
    <div class="sm:p-16 sm:pl-0 p-4 w-full pr-0">
      <router-view v-slot="{ Component }">
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
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    Sidebar,
  },
})
</script>
