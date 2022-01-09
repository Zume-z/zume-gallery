<template>
  <div class="flex-row w-full">
    <div class="flex h-[95%] items-center justify-center">
      <a class="text-black">coming soon</a>
    </div>
    <div class="flex h-[5%] justify-center gap-6">
      <a class="text-black">saliva</a>
      <a class="text-black">{{ datetime }}</a>
      <a class="text-black">002/302</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: () => ({
    currentDate: new Date(),
  }),
  computed: {
    datetime() {
      return this.currentDate.getHours() + ':' + this.currentDate.getMinutes() + ':' + this.currentDate.getSeconds()
    },
  },
})
</script>
