import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useSonglistStore = defineStore("songlist", () => {
  let originSonglist = ref([]);
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
});
