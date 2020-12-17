<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Top 5 Pieces of Advice
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        title='Advice'
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
      "Don't schedule meetings in the middle of the day",
      "Intermittent fasting can really boost your productivity. Try it for at least 3-4 days in a row, you will be surprised",
      "It's important to try to connect with and meet people, even if your job is not really social by nature",
      "If you are editting a lot of text, use Vim, it will save you so much time",
      "People always underestimate how long it will take to develop things. Whether you are on the sending or receiving end, try to keep your expectations reasonable."
    ]

    return {
      list
    }
  }
})
</script>
