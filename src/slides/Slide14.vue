<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Network Map
  div.flex.flex-grow.items-center-justify-around
    div.grid.grid-cols-8.gap-6.grid-rows-8
      card(
        title='product'
        :list='["Launched Beta and Full Release Version", "Iterated and rolled out new features", "Planning B2B content marketplace"]'
      ).row-start-2.row-end-4.col-start-1.col-end-3
      card(
        title='News'
        :list='["Startup Pill 68th fastest growing Canadian startup", "Guest on Forward Thinking Founders Podcast", "Product Hunt Featured Product", "Featured on The Tech Move"]'
      ).row-start-1.row-end-3.col-start-3.col-end-7
      card(
        title='Relationships'
        :list='["Planned Kayak Partnership","Zurich Tourism Partnership", "Lindt Museum Partnership", "Diverse Advisory Board"]'
      ).row-start-2.row-end-4.col-start-7.col-end-9
      card(
        title='User/Customer Segments'
        :list='["Users: Travel Creators who are having difficulty monetizing their content", "Travel Businesses: Having difficulty acquiring high quality user generated content"]'
      ).row-start-4.row-end-6.col-start-1.col-end-3
      div.row-start-3.row-end-5.col-start-3.col-end-7
        div.flex.flex-row.justify-center.items-center.w-full.h-full
          div.flex.items-center
            img(src='/src/assets/logo.png').w-36.inline-block
            span.font-nexa.text-6xl Wandr
      card(
        title='Organizations'
        :list='["Currently not part of any accelerator"]'
      ).row-start-4.row-end-6.col-start-1.col-end-3
      card(
        title='Business Model'
        :list='["Brings authentic video advice to travellers - nobody currently traveling", "Travel Creators are having difficulty monetizing their content", "Travel Businesses are having difficulty acquiring content"]'
      ).row-start-5.row-end-7.col-start-3.col-end-7
      card(
        title='New Opportunities'
        :list='["Seed Funding Q1 2021", "In discussions with Kayak"]'
      ).row-start-4.row-end-6.col-start-7.col-end-9
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