<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Actual Workplan
  div.flex.flex-col.flex-grow.justify-evenly
    div.relative
      card(
        title='4-in-4 Week 11-14'
        :list='["Add community safety features (blocking, reporting, etc)","Overhaul map loading system (current library is slow)","Create internal spec for desktop/mobile component counterparts", "Begin migration to Golang/GRPC microservices instead of Typescript/JSON ones"]'
      ).w-full
    div.relative
      card(
        title='Results'
        :list='["Features were implemented successfully, nobody has used them yet... thanks Apple 😤","Custom mapbox loader was implemented and is significantly faster","Internal spec is complete although not all views have been implemented", "1 of 4 backend services are currently written in Go"]'
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
  }
})
</script>
