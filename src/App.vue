<template>
  <div class="flex w-full min-h-screen flex-row">
    <div class="w-full">
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
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {},
})
</script>
