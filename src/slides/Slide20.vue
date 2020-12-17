<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Final Reflection
  div.flex.flex-col.flex-grow.justify-evenly.items-center
    div.relative
      card(
        class='w-full'
      )
        span
          | Thanks everybody for a great co-op term.
          | It sucks that I couldn't actually meet anyone in person but it was still great 
          | seeing everyone's progress over the term.
          | While it is really difficult to build your own business from the ground up, 
          | the work is satisfying in a way that being an employee just isn't.
a(href='https://github.com/seanaye/workterm-pres').absolute.bottom-0.right-0.m-4
 | https://github.com/seanaye/workterm-pres

  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from '/src/components/Card.vue'

export default defineComponent({
  components: {
    Card
  }
})
</script>
