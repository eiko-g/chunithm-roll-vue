<template>
    <div class="setting">
        <h2 class="main-title">抽歌设置</h2>

        <button class="submit" @click="backToRoll">保存设置</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useSettingStore } from "@/stores/setting";

const router = useRouter();
const settingStore = useSettingStore();

function backToRoll() {
    console.log('点击了保存设置');

    settingStore.isFirstRun = false;

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

.submit {
    @include button();
}
</style>