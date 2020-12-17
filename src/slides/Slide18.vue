<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Top 5 Technical Learnings
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        title='Technical Learnings'
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
      "Golang is a fantastic serverside language. Python-like productivity but without dynamic typing headaches. Typescript-like type checking but with better concurrency model",
      "Don't write everything from scratch, SaaS providers are a great way to cut down development time, especially for small teams.",
      "Context switching is a huge productivity killer when coding, avoid it like the plague",
      "Don't use GraphQL for server-to-server communication, use GRPC",
      "The ability to explain complex technical ideas to non-technical people through analogies is an extremely valuable skill"
    ]

    return {
      list
    }
  }
})
</script>
