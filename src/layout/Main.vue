<template lang="pug">
div.w-screen.h-screen.bg-wandrdark.text-white
  div(class='right-1/2' @click='back').absolute.left-0.top-0.bottom-0.z-top
  div(class='left-1/2' @click='forward').absolute.right-0.top-0.bottom-0.z-top
  router-view
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const route = useRoute()

    function getSlide () {
      const path = route.path.replace('/', '')
      return +path
    }

    function forward () {
      const cur = getSlide()
      router.push(`/${cur + 1}`)
    }

    function back () {
      const cur = getSlide()
      router.push(`/${cur - 1}`)
    }

    return {
      forward,
      back
    }
  }
})
</script>