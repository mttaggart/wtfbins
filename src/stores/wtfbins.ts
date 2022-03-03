import { defineStore } from 'pinia'

const binsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

export const wtfBinStore = defineStore({
  id: 'wtfbin',
  state: () => ({
    wtfbins: [],
  }),
  getters: {
  },
  actions: {
    retrieveWtfBins: async function() {
      let binsJson = await fetch(binsUrl);
      let binsData = await binsJson.json();
      this.wtfbins = binsData;
    }
  }
})
