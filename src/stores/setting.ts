import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingStore = defineStore("setting", () => {
  let isFirstRun = ref(true);
  let rank = ref(["all"]);
  let category = ref(["all"]);
  return { isFirstRun, rank, category };
});
