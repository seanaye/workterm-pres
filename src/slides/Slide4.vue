<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl.text-center.w-full.mb-12 Most Productive Progress Report
  div.flex.flex-col.flex-grow
    div.flex-grow.items-center.relative
      card(
        title='Report Dec 1'
        :list='["Made tough but ncessary decision to let someone go","Implmented two large new features (Discover page and Collections)","Overhauled map loading system"]'
      )
      //- div(class='-rotate-3').rounded-xl.bg-primary.transform.shadow-lg.absolute.inset-0
      //- div.rounded-2xl.bg-altgray-800.p-6.px-8.relative
        div.text-2xl Original Term Goals
        ul.list-disc
          li.w-full.mb-4 Scale number of active users
          li.w-full.mb-4
            | Communicate ideas effectively with other employees and advisors
          li.w-full
            | Create a revenue channel
    div.flex-grow.items-center
      div.text-2xl.text-center Takeaways
      div.inline-grid.grid-cols-2.gap-x-4
        card(title='Communication' :list='["Even more important in uncomfortable situations", "Important to air grievances in a respectable way"]').mx-3
        card(title='Grew Engagement' :list='["New features grew user retention", "Some weeks are just naturally more productive than others"]').mx-3
  
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