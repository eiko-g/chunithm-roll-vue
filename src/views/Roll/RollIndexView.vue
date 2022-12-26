<template>
    <ResultBlockVue :currentSong="songlistStore.currentSong" :currentRank="songlistStore.currentRank" />
    <SettingInfoBlockVue :setting="settingStore" />
    <RollButtonsVue @rollClicked="roll" :buttonDisabled="buttonDisabled" />
    <div class="footer">
        <p>ver test-20221227.01</p>
    </div>
</template>
<script setup lang="ts">
import ResultBlockVue from '@/components/Roll/ResultBlock.vue';
import RollButtonsVue from '@/components/Roll/RollButtons.vue';
import SettingInfoBlockVue from '@/components/Roll/SettingInfoBlock.vue';

import { ref, toRaw } from 'vue';
import { useSettingStore } from '@/stores/setting';
import { useSonglistStore } from '@/stores/songlist';
import shuffleArray from '@/mixin/shuffleArray';

const settingStore = useSettingStore();
const songlistStore = useSonglistStore();

let buttonDisabled = ref(settingStore.isFirstRun);
console.log('settingStore.isFirstRun', settingStore.isFirstRun);
console.log('songlistStore', songlistStore)

function roll() {
    console.log('Roll!', new Date());
    buttonDisabled.value = true;

    let rollSonglist: any = toRaw(songlistStore.rollSonglist);
    shuffleArray(rollSonglist);

    let selectThis = rollSonglist[0];
    console.log("选到了这首歌：", selectThis);

    songlistStore.currentSong = songlistStore.originSonglist.filter((song) => {
        return song.id === selectThis.id;
    })[0];
    console.log("歌曲详情：", songlistStore.currentSong);
    songlistStore.currentRank = selectThis.rank;
    console.log('songlistStore.currentRank', songlistStore.currentRank)

    setTimeout(() => {
        buttonDisabled.value = false;
    }, 500);
}
</script>

<style lang="scss" scoped>
.footer {
    font-size: 12px;
    color: #999;
    text-align: center;
}
</style>