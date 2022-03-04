<script setup lang="ts">
  import WtfBinItem from "@/components/WtfBinItem.vue"
  import WtfBinTextSearchVue from "@/components/WtfBinTextSearch.vue";
  import ActiveTagContainer from "@/components/ActiveTagContainer.vue";
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
    <p>WTF, Bin?!</p>
    <WtfBinTextSearchVue :update-handler="updateTextFilter" />
    <ActiveTagContainer :remove-tag="removeTag" :tags="store.tagFilter" />
    <ul class="bin-container">
      <WtfBinItem 
        v-for="(w, i) in store.filterBins" :key="i" 
        :wtfbin="w"
        :add-tag="addTag"
      />  
    </ul>
    <div class=".no-bins" v-if="store.filterBins.length == 0">
      I got no bins for ya!
    </div>
  </main>
</template>

<style scoped>
  .bin-container {
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  @media screen and (max-width: 700px) {
    .bin-container {
      flex-direction: column;
    }
  }
</style>
