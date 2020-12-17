<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Top 5 Business Learnings
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        title='Business Learnings'
        :list='list'
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
    const list = [
      "Tech should be in service of business goals, not the other way around",
      "Its not a sprint but a marathon, you should leave at least 1 hour per day for leisure",
      "Strong user analytics is good but you should be talking to your customers about their needs",
      "You can't be solving imaginary problems, pivot when needed",
      "Communicate your ideas effectively"
    ]

    return {
      list
    }
  }
})
</script>
