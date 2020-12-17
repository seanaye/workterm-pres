<template lang="pug">
div.p-12.w-full.h-full.flex.flex-col.text-lg
  div.text-4xl Original PSR Table
  div.flex.flex-grow.items-center.justify-center
    div.grid.grid-cols-4.gap-1
      div(
        v-for='(month, i) in months'
        :key='i'
      ).bg-red-500.text-black.flex.items-center.justify-center.font-bold.p-4
        div {{ month }}
      div(
        v-for='(product, i) in products'
        :key='i'
        :class='{"font-bold": i === 0}'
      ).bg-yellow-300.text-black.flex.items-center.justify-center.p-4
        div {{ product }}
      div(
        v-for='(service, i) in services'
        :key='i'
        :class='{"font-bold": i === 0}'
      ).bg-red-300.text-black.flex.items-center.justify-center.p-4
        div {{ service }}
      div(
        v-for='(relationship, i) in relationships'
        :key='i'
        :class='{"font-bold": i === 0}'
      ).bg-yellow-300.text-black.flex.items-center.justify-center.p-4
        div {{ relationship }}
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  setup () {
    const table = reactive({
      months: ['', 'September', 'October', 'Nov/Dev'],
      products: ['Product', 'Launch Beta', 'Roll out Kudos', 'Ability to manage 10,000'],
      services: ['Services', 'Explore and post spots around the world', 'Chat amongst users', 'Plan trips in Switzerland'],
      relationships: ['Relationships', 'Leverage technical advisors', 'Conversations with inverstors', 'Establish tech partnerships']
    })

    return {
      ...toRefs(table)
    }
  }  
})
</script>