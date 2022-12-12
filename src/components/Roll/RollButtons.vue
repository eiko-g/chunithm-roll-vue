<template>
    <div class="buttons">
        <button @click="$emit('rollClicked')" class="button roll" :disabled="buttonDisabled">Roll!</button>
        <button @click="gotoSetting" class="button setting">抽歌设置</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
    buttonDisabled: boolean;
}>();
defineEmits(["rollClicked"]);

function gotoSetting() {
    router.push({ name: "rollSetting" });
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin";

.button {
    @include button();
}
</style>