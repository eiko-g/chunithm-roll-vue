<template>
    <ResultBlockVue :currentSong="currentSong" :currentRank="currentRank" />
    <RollButtonsVue @rollClicked="roll" :buttonDisabled="buttonDisabled" />
    <div class="footer">
        <p>ver test-20221213.01</p>
    </div>
</template>
<script setup lang="ts">
import ResultBlockVue from '@/components/Roll/ResultBlock.vue';
import RollButtonsVue from '@/components/Roll/RollButtons.vue';

import { ref } from 'vue';
import { useSettingStore } from '@/stores/setting';
import { useSonglistStore } from '@/stores/songlist';

const settingStore = useSettingStore();
const songlistStore = useSonglistStore();

let buttonDisabled = ref(settingStore.isFirstRun);
console.log('settingStore.isFirstRun', settingStore.isFirstRun);
console.log('songlistStore', songlistStore)

let currentSong = songlistStore.currentSong;
let currentRank = songlistStore.currentRank;

function roll() {
    console.log('Roll!', new Date());
}
</script>

<style lang="scss" scoped>
.footer {
    font-size: 12px;
    color: #999;
    text-align: center;
}
</style>