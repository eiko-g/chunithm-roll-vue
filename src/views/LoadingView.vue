<template>
    <h2>载入日志</h2>
    <ul class="infolist">
        <InfoVue v-for="info in infoArray" :info="info" :key="info.time" />
    </ul>
</template>

<script lang="ts" setup>
import InfoVue from '@/components/Loading/Info.vue';
import { useSonglistStore } from '@/stores/songlist';
import { onMounted, reactive } from 'vue';

import type ISong from '@/interface/ISong';
import { useRouter } from "vue-router";

const songlistStore = useSonglistStore();
const router = useRouter();

onMounted(async () => {
    push("开始载入了捏");
    let response = await fetch("./data/chunithm2024.json?ver=20230923.01"),
        json: IJson;
    if (response.ok) {
        push("歌单加载成功，正在处理");
        json = await response.json();
        songlistStore.originSonglist = json.list.filter(item => item.cn == true);
        console.log('songlistStore.originSonglist', songlistStore.originSonglist);
        push("准备完成，正在跳转~");
        setTimeout(() => {
            router.push({ name: "roll" });
        }, 800);
    } else {
        push("载入 JSON 炸了，HTTP-Error: " + response.status);
        console.log("Response: ", response);
        alert("怎么载入这 JSON 还会出错？HTTP-Error: " + response.status);
    }
});

interface IInfo {
    time: string;
    msg: string | null | undefined;
}

interface IJson {
    data: string;
    list: Array<ISong>
}

let infoArray: Array<IInfo> = reactive([]);

function transTime(input: Date): string {
    let date = input.toLocaleDateString(),
        time = input.toLocaleTimeString();

    return `${date} ${time}`;
}

function push(msg: string) {
    infoArray.push({
        time: transTime(new Date()),
        msg: msg,
    });

    console.log("infoArray: ", infoArray);
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
    text-align: center;
    line-height: 1.5;
    margin: 0;

    &::before,
    &::after {
        color: #ff398c;
        display: inline-block;
        margin: 0 1em;
    }

    &::before {
        content: '[';
    }

    &::after {
        content: ']';
    }
}

.infolist {
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>