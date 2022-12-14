<template>
    <div class="setting">
        <h2 class="main-title">抽歌设置</h2>
        <RankBlockVue />
        <CategoryBlockVue />
        <LevelBlockVue />
        <button class="submit" @click="backToRoll">保存设置</button>
    </div>
</template>

<script lang="ts" setup>
import RankBlockVue from "@/components/Setting/RankBlock.vue";
import CategoryBlockVue from "@/components/Setting/CategoryBlock.vue";
import LevelBlockVue from "@/components/Setting/LevelBlock.vue"

import { useRouter } from "vue-router";
import { useSettingStore } from "@/stores/setting";

const router = useRouter();
const settingStore = useSettingStore();

function backToRoll() {
    console.log('点击了保存设置');

    settingStore.isFirstRun = false;

    console.log('settingStore', settingStore)

    router.push({ name: "roll" });
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin";

.main-title {
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

.setting :deep(.setting-block) {
    .title {
        font-size: 18px;
        line-height: 1.5;
        margin: 0.5em 0;
    }

    .tip {
        color: #666;
        font-size: 14px;
    }
}

.submit {
    @include button();
}
</style>