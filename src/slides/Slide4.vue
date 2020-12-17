<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Actual Workplan
  div.flex.flex-col.flex-grow.justify-evenly
    div.relative
      card(
        title='4-in-4 Week 3-6'
        :list='["Activate beta signup users to download","Meet with advisors about user analytics collection","Close current Gitlab issues", "Add jest"]'
      ).w-full
    div.relative
      card(
        title='Results'
        :list='["Campaign emails were sent but conversion was much lower than hoped","Met with advisors but it was not a huge learning experience","Gitlab issues (bugs) were closed. Admittedly not a very good goal", "Jest was added. Also not a very good goal"]'
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