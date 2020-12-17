<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Self Assessment
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        title='Assessment'
        :list='["Learning YVI Business/Startup Process -- 4","Learning decision-making & decision-sequencing processes -- 5","Adapting to external factors & uncertainty -- 5"]'
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
