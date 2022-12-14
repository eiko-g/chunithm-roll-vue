import type ISong from "@/interface/ISong";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSonglistStore = defineStore("songlist", () => {
  let originSonglist: Array<ISong> = [];
  let currentSong = ref({
    id: 0,
    catname: "分类",
    title: "有什么呢？",
    artist: "",
    lev_bas: "B",
    lev_adv: "A",
    lev_exp: "E",
    lev_mas: "M",
    lev_ult: "U",
    image: undefined,
  });
  let currentRank = ref("");
  let rollSonglist = ref([]);

  return { originSonglist, currentSong, currentRank, rollSonglist };
});
