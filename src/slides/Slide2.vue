<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl.text-center.w-full.mb-12 Original Workplan
  div.flex.flex-col.flex-grow
    div.flex-grow.items-center.relative
      card(
        title='Original Term Goals'
        :list='["Scale number of active users","Communicate ideas effectively with other employee and advisors","Create a revenue stream"]'
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
      card(title='End of Term Changes' :list='["Short to medium term revenue is planned to b2b sales"]')
  
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