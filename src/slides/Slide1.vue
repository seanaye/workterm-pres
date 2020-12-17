<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Venture Idea
  div.flex.flex-col.flex-grow.justify-evenly
    card(
      title="About Wandr"
      :list='["Wandr is a video sharing platform for travellers to discover and plan trips.", "Travel businesses can purchase user generated content for authentic marketing materials and to give back to the community."]')
    card(
      title="Value Prop"
      :list='card2List'
    )

  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '/src/components/Card.vue'

export default defineComponent({
  components: {
    Card
  },
  setup () {
    const card2List = [
      "Travellers get value from Wandr through video reviews and trip planning features.",
      "Travel businesses have a need for user generated content, but have a difficult time acquiring it. Wandr allows travel businesses to purchase authentic content directly from the creator."
    ]

    return {
      card2List
    }
  }
})
</script>