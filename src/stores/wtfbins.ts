import type { WtfBin } from '@/interfaces/WtfBin';
import { defineStore } from 'pinia'

const binsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

export const wtfBinStore = defineStore({
  id: 'wtfbin',
  state: () => ({
    wtfbins: [],
    textFilter: "",
    tagFilter: "",
  }),
  getters: {
    filterByText(state) {
      const textFilter = state.textFilter;
      console.log(textFilter);
      if (textFilter == "") return state.wtfbins;
      return state.wtfbins.filter((b: WtfBin) => {
        const lowerName = b.name.toLowerCase();
        const lowerDesc = b.description.toLowerCase();
        const lowerContrib = b.contributor.toLowerCase();
        return (
          lowerName.indexOf(textFilter) >= 0 ||
          lowerDesc.toLowerCase().indexOf(textFilter) >= 0 ||
          lowerContrib.toLowerCase().indexOf(textFilter) >= 0
        );
      } 
      );
    }
  },
  actions: {
    retrieveWtfBins: async function() {
      let binsJson = await fetch(binsUrl);
      let binsData = await binsJson.json();
      console.log(binsData);
      this.wtfbins = binsData;
    },

    updateTextFilter(textFilter: string) {
      this.textFilter = textFilter;
    }
  }
})
