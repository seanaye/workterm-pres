<template lang="pug">
div.w-screen.h-screen.bg-wandrdark.text-white
  img(v-if='slideNum > 0' src='/src/assets/logo.png').absolute.top-0.right-0.w-16.m-4
  div(class='right-1/2' @click='back').absolute.left-0.top-0.bottom-0.z-top
  div(class='left-1/2' @click='forward').absolute.right-0.top-0.bottom-0.z-top
  router-view
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const route = useRoute()

    const slideNum = computed(() => +route.path.replace('/', ''))

    function forward () {
      router.push(`/${slideNum.value + 1}`)
    }

    function back () {
      router.push(`/${slideNum.value - 1}`)
    }

    return {
      forward,
      back,
      slideNum
    }
  }
})
</script>