<script setup lang="ts">
  import WtfBinItem from "@/components/WtfBinItem.vue"
  let wtfbins = [{
    id: 1,
    name: "SCCM",
    description: "Windows Config Manager runs b64-encoded powershell."
  },
  {
    id: 2,
    name: "PanGpHip.exe",
    description: "Palo Alto GP Firewall HIP check runs whoami.exe"
  }
    
  ]
</script>

<template>
  <main>
    <p>These are WTFBins. I don't know what anyone was thinking.</p>
    <ul>
      <WtfBinItem v-for="(w, i) in wtfbins" :key="i" :wtfbin="w" wtf/>  
    </ul>
  </main>
</template>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
  }
</style>
