<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Most Productive Progress Report
  div.flex.flex-col.flex-grow.justify-evenly
    card(
      title='Report Dec 1'
      :list='["Made tough but ncessary decision to let someone go","Implmented two large new features (Discover page and Collections)","Overhauled map loading system"]'
    ).w-full
      //- div(class='-rotate-3').rounded-xl.bg-primary.transform.shadow-lg.absolute.inset-0
      //- div.rounded-2xl.bg-altgray-800.p-6.px-8.relative
        div.text-2xl Original Term Goals
        ul.list-disc
          li.w-full.mb-4 Scale number of active users
          li.w-full.mb-4
            | Communicate ideas effectively with other employees and advisors
          li.w-full
            | Create a revenue channel
    div.inline-grid.grid-cols-2.gap-x-4
      div.col-span-2.flex.items-center.justify-center
        div.text-2xl.text-center.mb-3 Takeaways
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