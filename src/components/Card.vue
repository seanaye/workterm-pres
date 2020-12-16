<template lang="pug">
div.rounded-2xl.bg-altgray-800.p-6.px-8
  div.text-2xl {{ title }}
  ul.list-disc
    li(v-for='(item, i) in list').w-full {{ item }} 
  slot
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String
    },
    list: {
      type: Array as PropType<String[]>
    }
  }
})
</script>