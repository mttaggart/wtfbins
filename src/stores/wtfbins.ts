import type { WtfBin } from '@/interfaces/WtfBin';
import { defineStore } from 'pinia'

const binsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

interface WtfBinState {
  wtfbins: Array<WtfBin>,
  textFilter: string,
  tagFilter: Array<string>
} 

const tagMatch = (
  binTags: Array<string>, 
  tagFilter: Array<string>
): boolean => {
  if (tagFilter.length == 0) return true;
  return binTags.some((t: string): boolean => tagFilter.indexOf(t) >= 0);
};

const textMatch = (
  bin: WtfBin,
  textFilter: string
): boolean => {
  if (textFilter == "") return true;
  const lowerName = bin.name.toLowerCase();
  const lowerDesc = bin.description.toLowerCase();
  const lowerContrib = bin.contributor.toLowerCase();
  return (
    lowerName.indexOf(textFilter) >= 0 ||
    lowerDesc.toLowerCase().indexOf(textFilter) >= 0 ||
    lowerContrib.toLowerCase().indexOf(textFilter) >= 0
  );
};

export const wtfBinStore = defineStore({
  id: 'wtfbin',
  state: (): WtfBinState => ({
    wtfbins: [],
    textFilter: "",
    tagFilter: [],
  }),
  getters: {
    filterBins: (state) => {
      return state.wtfbins.filter((b: WtfBin) => (
          textMatch(b, state.textFilter) &&
          tagMatch(b.tags, state.tagFilter)
        )
      )
    }
  },
  actions: {
    async retrieveWtfBins() {
      let binsJson = await fetch(binsUrl);
      let binsData = await binsJson.json();
      console.log(binsData);
      this.wtfbins = binsData;
    },

    updateTextFilter(textFilter: string) {
      this.textFilter = textFilter;
    },
    addTagFilter(tag: string) {
      this.tagFilter.push(tag);
    },
    removeTagFilter(tag: string) {
      const taxIdx = this.tagFilter.indexOf(tag)
      if (taxIdx >= 0) {
        this.tagFilter.splice(taxIdx, 1);
      }
    }

  }
})
