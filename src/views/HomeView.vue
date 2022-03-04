<script setup lang="ts">
  import WtfBinItem from "@/components/WtfBinItem.vue"
  import WtfBinTextSearchVue from "@/components/WtfBinTextSearch.vue";
  import { wtfBinStore } from "@/stores/wtfbins";
  const store = wtfBinStore();
  store.retrieveWtfBins();
  const updateTextFilter = (e: Event) => {
    let newFilter = (e.target as HTMLInputElement).value.toLowerCase();
    store.updateTextFilter(newFilter);
  }  
</script>

<template>
  <main>
    <WtfBinTextSearchVue :update-handler="updateTextFilter" />
    <p>These are WTFBins. I don't know what anyone was thinking.</p>
    <ul>
      <WtfBinItem v-for="(w, i) in store.filterByText" :key="i" :wtfbin="w" wtf/>  
    </ul>
  </main>
</template>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
  }
</style>
