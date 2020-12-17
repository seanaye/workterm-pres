<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Top 3 Accomplishments
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        title='Accomplishments'
        :list='["Single handedly building, deploying and scaling a video streaming platform to 80,000 views","1546 git commits over 15 repos since September","Successfully hiring, onboarding and managing a developer"]'
        class='w-full'
      )

  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from '/src/components/Card.vue'

export default defineComponent({
  components: {
    Card
  },
  setup () {
  }
})
</script>
