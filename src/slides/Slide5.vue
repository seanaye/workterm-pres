<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Actual Workplan
  div.flex.flex-col.flex-grow.justify-evenly
    div.relative
      card(
        title='4-in-4 Week 7-10'
        :list='["Release v0.5.x with new notification system","Hire and onboard frontend dev","Write Swift/Kotlin for sharing videos to instagram", "Rework discover tab with themes"]'
      ).w-full
    div.relative
      card(
        title='Results'
        :list='["Release successfully, new notification system has been working great","Hired Diyen from Cameroon as a frontend developer. Has been a great help so far","This was determined to be not a priority. Time spent greatly outweighs benefits", "Discover tab was reworked but in a different way"]'
      ).w-full
  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from '/src/components/Card.vue'

export default defineComponent({
  components: {
    Card
  },
  setup () {
    return {}
  }
})
</script>
