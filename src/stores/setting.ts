import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingStore = defineStore("setting", () => {
  let isFirstRun = ref(true);
  let rank = ref(["all"]);
  let category = ref(["all"]);
  let lvMultiple = ref(false);
  let lvMin = ref(0);
  let lvMinPlus = ref(false);
  let lvMax = ref(0);
  let lvMaxPlus = ref(false);
  return {
    isFirstRun,
    rank,
    category,
    lvMultiple,
    lvMin,
    lvMinPlus,
    lvMax,
    lvMaxPlus,
  };
});
