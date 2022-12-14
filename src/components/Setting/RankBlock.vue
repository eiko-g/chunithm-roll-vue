<template>
    <div class="setting-block rank">
        <h3 class="title">难度设置</h3>

        <div class="ranks">
            <label class="rank-label all" for="rank-all">
                <input type="checkbox" name="rank" value="all" id="rank-all" class="rank all" />
                <span class="inner">All</span>
            </label>

            <label class="rank-label B" for="rank-B">
                <input type="checkbox" name="rank" value="lve_bas" id="rank-B" class="rank B" />
                <span class="inner">Basic</span>
            </label>

            <label class="rank-label A" for="rank-A">
                <input type="checkbox" name="rank" value="lev_adv" id="rank-A" class="rank A" />
                <span class="inner">Advanced</span>
            </label>

            <label class="rank-label E" for="rank-E">
                <input type="checkbox" name="rank" value="lev_exp" id="rank-E" class="rank E" />
                <span class="inner">Expert</span>
            </label>

            <label class="rank-label M" for="rank-M">
                <input type="checkbox" name="rank" value="lev_mas" id="rank-M" class="rank M" />
                <span class="inner">Master</span>
            </label>

            <label class="rank-label U" for="rank-U">
                <input type="checkbox" name="rank" value="lev_ult" id="rank-U" class="rank U" />
                <span class="inner">Ultima</span>
            </label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { checkAll, checkOthers } from "@/mixin/checkInput";
import { onMounted } from "vue";
import { useSettingStore } from "@/stores/setting";

const settingStore = useSettingStore();

function saveRank() {
    let elements = document.querySelectorAll("input.rank:checked"),
        tempRank: Array<string> = [];
    elements.forEach((item) => {
        tempRank.push((item as HTMLInputElement).value);
    });
    settingStore.rank = tempRank;
}

onMounted(() => {
    //#region 难度选项点击事件
    // 非 all 难度
    document.querySelectorAll("input.rank:not(input.all)").forEach((item) => {
        item.addEventListener("click", () => {
            checkOthers("input.rank", "input.rank.all");
        });
    });

    // all 难度
    document.querySelector("input.rank.all")!.addEventListener("click", () => {
        checkAll("input.rank", "input.rank.all");
    });

    // 所有难度选项
    document.querySelectorAll("input.rank").forEach((item) => {
        // 有变化时
        item.addEventListener("change", (el) => {
            console.log("Rank changed: ", el);
            saveRank();
        });
        // 载入时勾上已选择的难度
        (item as HTMLInputElement).checked = settingStore.rank.includes(
            (item as HTMLInputElement).value
        );
    });
    //#endregion
});
</script>

<style lang="scss" scoped>
@import "@/style/mixin";

.ranks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .rank-label {
        user-select: none;
        text-align: center;

        margin-bottom: 10px;

        &:hover {
            cursor: pointer;
        }

        input[type="checkbox"] {
            display: none;
        }

        .inner {
            display: block;
            border: 3px solid #ccc;
            padding: 5px 10px;
        }

        &.all {
            @include input-label();
        }

        &.B {
            @include input-label(var(--color-B), var(--color-B));
        }

        &.A {
            @include input-label(var(--color-A), var(--color-A));
        }

        &.E {
            @include input-label(var(--color-E), var(--color-E));
        }

        &.M {
            @include input-label(var(--color-M), var(--color-M));
        }

        &.U {
            @include input-label(var(--color-U), var(--color-U));
        }
    }
}
</style>