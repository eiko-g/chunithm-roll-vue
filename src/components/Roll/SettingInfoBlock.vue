<template>
    <div class="setting-info">
        <p>
            <b>抽选等级：</b>
            [
            <span class="rank">
                <span v-if="!setting.rank">难度</span>
                <span v-if="setting.rank && setting.rank.includes('all')" class="all">全难度</span>
                <span v-if="setting.rank && setting.rank.includes('lev_bas')" class="B">B</span>
                <span v-if="setting.rank && setting.rank.includes('lev_adv')" class="A">A</span>
                <span v-if="setting.rank && setting.rank.includes('lev_exp')" class="E">E</span>
                <span v-if="setting.rank && setting.rank.includes('lev_mas')" class="M">M</span>
                <span v-if="setting.rank && setting.rank.includes('lev_ult')" class="U">U</span>
            </span>
            ]
            <span class="lv">{{ lvText }}</span>
        </p>
        <p>
            <b>抽选分类：</b>
            <span class="category">{{ catText }}</span>
        </p>
        <p>
            <b>抽选歌单：</b>
            <span class="songlist">ver.CH1.10-20230921</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps(['setting']);

let lvText = computed(() => {
    let str = "";
    if (props.setting.lvMin > 0) {
        str = props.setting.lvMin;
        if (props.setting.lvMinPlus === true) {
            str += "+";
        }
        if (props.setting.lvMultiple) {
            str += ` ~ ${props.setting.lvMax}`;
            if (props.setting.lvMaxPlus === true) {
                str += "+";
            }
        }
    } else {
        str = "未设置等级";
    }
    return str;
});

function getCatName(cat: string) {
    switch (cat) {
        case "pops_anime":
            return "动画 & 流行";
        case "niconico":
            return "nico & V家";
        case "toho":
            return "东方 Project";
        case "variety":
            return "联动乐曲";
        case "irodorimidori":
            return "彩绿";
        case "gekimai":
            return "音击 & maimai";
        case 'original':
            return '原创';
        case "all":
            return "全部分类";
        default:
            return "分类有误";
    }
}

let catText = computed(() => {
    let tempArr: Array<string> = [];
    props.setting.category.forEach((item: string) => {
        tempArr.push(getCatName(item));
    });
    return tempArr.join("、");
});
</script>

<style lang="scss" scoped>
.setting-info {
    color: #333;
    font-size: 12px;
    text-align: center;

    .rank {
        >span:not(:last-child)::after {
            content: ".";
        }

        .B {
            color: var(--color-B);
        }

        .A {
            color: var(--color-A);
        }

        .E {
            color: var(--color-E);
        }

        .M {
            color: var(--color-M);
        }

        .U {
            color: var(--color-U);
        }
    }
}
</style>