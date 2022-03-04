<script setup lang="ts">
  import WtfBinItem from "@/components/WtfBinItem.vue"
  import WtfBinTextSearchVue from "@/components/WtfBinTextSearch.vue";
  import { wtfBinStore } from "@/stores/wtfbins";
  const store = wtfBinStore();
  store.retrieveWtfBins();

  const updateTextFilter = (e: Event) => {
    let newFilter = (e.target as HTMLInputElement).value.toLowerCase();
    store.updateTextFilter(newFilter);
  };

  const addTag = (tag: string) => {
    store.addTagFilter(tag);
  };
  
  const removeTag = (tag: string) => {
    store.removeTagFilter(tag);
  } 
</script>

<template>
  <main>
    <WtfBinTextSearchVue :update-handler="updateTextFilter" />
    <p>WTF, Bin?!</p>
    <ul>
      <li 
        v-for="t of store.tagFilter"
        @click="() => removeTag(t)"
      >
        {{t}}
      </li>
    </ul>
    <ul>
      <WtfBinItem 
        v-for="(w, i) in store.filterBins" :key="i" 
        :wtfbin="w"
        :add-tag="addTag"
        :remove-tag="removeTag"
      />  
    </ul>
    <div class=".no-bins" v-if="store.filterBins.length == 0">
      I got no bins for ya!
    </div>
  </main>
</template>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
  }
</style>
