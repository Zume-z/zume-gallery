<template>
  <Gallery category="all" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Gallery from '../components/Gallery.vue'
export default defineComponent({
  components: {
    Gallery,
  },
})
</script>
