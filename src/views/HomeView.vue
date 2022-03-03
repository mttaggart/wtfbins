<script setup lang="ts">
  import WtfBinItem from "@/components/WtfBinItem.vue"
  import { wtfBinStore } from "@/stores/wtfbins";
  const store = wtfBinStore();
  store.retrieveWtfBins();
  
</script>


<template>
  <main>
    <p>These are WTFBins. I don't know what anyone was thinking.</p>
    <ul>
      <WtfBinItem v-for="(w, i) in store.wtfbins" :key="i" :wtfbin="w" wtf/>  
    </ul>
  </main>
</template>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
  }
</style>
