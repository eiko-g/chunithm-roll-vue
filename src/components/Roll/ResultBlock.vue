<template>
    <div class="result">
        <p class="tips">※ 封面切换时载入稍慢</p>
        <p :class="['category', currentSong.catname]">{{ currentSong.catname }}</p>

        <div class="cover-area">
            <img :src="coverScr" alt="Cover" :class="['cover', props.currentRank]">
            <span :class="['level-text', props.currentRank]">{{ lvText }}</span>
        </div>

        <h3 class="title" lang="ja-jp">{{ currentSong.title }}</h3>

        <div class="table-lv">
            <div :class="['lv-B', { current: currentRank('lev_bas') }]">{{ currentSong.lev_bas }}</div>
            <div :class="['lv-A', { current: currentRank('lev_adv') }]">{{ currentSong.lev_adv }}</div>
            <div :class="['lv-E', { current: currentRank('lev_exp') }]">{{ currentSong.lev_exp }}</div>
            <div :class="['lv-M', { current: currentRank('lev_mas') }]">{{ currentSong.lev_mas }}</div>
            <div :class="['lv-U', { current: currentRank('lev_ult') }]">{{ currentSong.lev_ult }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type ISong from '@/interface/ISong';

const props = defineProps<{
    currentSong: ISong;
    currentRank: string;
}>();
function currentRank(input: string) {
    return input === props.currentRank;
}

let coverScr = computed(() => {
    let coverStr: string;
    if (props.currentSong.image != undefined) {
        coverStr = `./assets/img/cover/${props.currentSong.image}`;
    } else {
        coverStr = "./assets/img/nocover.png";
    }
    return coverStr;
});

let lvText = computed(() => {
    let text = '';

    switch (props.currentRank) {
        case 'lev_bas': {
            text = 'Basic';
            break;
        }
        case 'lev_adv': {
            text = 'Advance';
            break;
        }
        case 'lev_exp': {
            text = 'Expert';
            break;
        }
        case 'lev_mas': {
            text = 'Master';
            break;
        }
        case 'lev_ult': {
            text = 'Ultima';
            break;
        }
        default:
            text = 'Rank';
    }

    return text;
});
</script>

<style lang="scss" scoped>
.result {
    .category {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background-color: #333;
        text-align: center;
        text-transform: uppercase;
        padding: 0.5em;
        margin: 1em auto;

        &.pops_anime {
            background-color: var(--color-pops_anime);
        }

        &.niconico {
            background-color: var(--color-niconico);
        }

        &.toho {
            background-color: var(--color-toho);
        }

        &.variety {
            background-color: var(--color-variety);
        }

        &.irodorimidori {
            background-color: var(--color-irodorimidori);
        }

        &.gekimai {
            background-color: var(--color-geikimai);
        }

        &.original {
            background-color: var(--color-original);
        }
    }

    .cover-area {
        position: relative;

        .cover {
            width: 190px;
            height: 190px;
            display: block;
            margin: auto;

            &.lev_bas {
                box-shadow: 0 0 0 3px var(--color-B);
            }

            &.lev_adv {
                box-shadow: 0 0 0 3px var(--color-A);
            }

            &.lev_exp {
                box-shadow: 0 0 0 3px var(--color-E);
            }

            &.lev_mas {
                box-shadow: 0 0 0 3px var(--color-M);
            }

            &.lev_ult {
                box-shadow: 0 0 0 3px var(--color-U);
            }
        }

        .level-text {
            font-size: 14px;
            color: #fff;
            background-color: #3a302e;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
            margin-left: 50%;
            padding: .3em 0.5em;
            transform: translateX(-50%) translateY(50%);
            text-transform: uppercase;

            &.lev_bas {
                background-color: var(--color-B);
            }

            &.lev_adv {
                background-color: var(--color-A);
            }

            &.lev_exp {
                background-color: var(--color-E);
            }

            &.lev_mas {
                background-color: var(--color-M);
            }

            &.lev_ult {
                box-shadow: 0 0 0 3px var(--color-U);
            }
        }
    }

    .title {
        font-size: 18px;
        text-align: center;
        margin: 1em 0;
        line-height: 1.5;
    }

    .table-lv {
        display: flex;
        justify-content: center;

        font-size: 14px;
        text-align: center;
        font-weight: bold;

        margin: 1em auto;
        cursor: default;

        .lv-B,
        .lv-A,
        .lv-E,
        .lv-M,
        .lv-U {
            width: 20%;
            margin: 0.5em;
            padding: 0.5em;

            &.current {
                color: #fff;
            }
        }

        .lv-B {
            box-shadow: 0 0 0 1px #fff, 0 0 0 2px var(--color-B);

            &.current {
                background-color: var(--color-B);
            }
        }

        .lv-A {
            box-shadow: 0 0 0 1px #fff, 0 0 0 2px var(--color-A);

            &.current {
                background-color: var(--color-A);
            }
        }

        .lv-E {
            box-shadow: 0 0 0 1px #fff, 0 0 0 2px var(--color-E);

            &.current {
                background-color: var(--color-E);
            }
        }

        .lv-M {
            box-shadow: 0 0 0 1px #fff, 0 0 0 2px var(--color-M);

            &.current {
                background-color: var(--color-M);
            }
        }

        .lv-U {
            box-shadow: 0 0 0 1px #fff, 0 0 0 2px var(--color-U);

            &.current {
                background-color: var(--color-U);
            }
        }

    }
}
</style>