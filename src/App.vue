<template>
  <div>
    <MemoryCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MemoryCard from './components/MemoryCard.vue'

@Component({
  components: {
    MemoryCard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
