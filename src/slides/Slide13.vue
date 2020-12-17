<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Body of Work Samples
  div.flex.flex-grow.items-center.justify-around
    div(class='w-2/5').text-xl.text-center
      card(
        title='Competitions'
        :list='["E Launch Pitch - Won", "Concept 5K - Semifinalist"]'
      )
    div(class='w-2/5').text-xl.text-center
      card(
        title='Programs'
        :list='["Velocity Incubator - Not Accepted", "Y Combinator - Not Accepted"]'
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

  }
})
</script>