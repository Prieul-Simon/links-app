<script setup lang="ts">
import { openDecodedMailto } from '../utils/mailto';

const props = defineProps<{
    text: string,
    href: string,
    icon?: string,
    uninvertedIcon?: string,
}>()

let absoluteHref = props.href
let onclick: (() => undefined) | undefined
let target: string | undefined = '_blank'
if (props.href.startsWith('mailto:')) {
    absoluteHref = 'javascript:void(0)'
    onclick=openDecodedMailto(props.href)
    target = undefined
} else if (!props.href.startsWith('http')) {
    absoluteHref = `https://links.prieul.fr/${props.href}`
}

</script>

<template>
    <div class="app-link">
        <img v-if="icon" class="app-link-icon" :src="icon">
        <img v-if="uninvertedIcon" class="app-link-uninverted-icon" :src="uninvertedIcon">
        <a type="button" ref="aElement" :href="absoluteHref" :onclick="onclick" :target="target">{{ text }}</a>
    </div>
</template>

<style scoped>
.app-link {
    border: 2px solid rgb(37, 79, 26);
    border-radius: 30px;
    width: 80%;
    align-self: center;
    position: relative;
}
.app-link:hover {
    background-color: rgb(37, 79, 26);
}

a {
    display: block;
    padding: 16px 20px;
    border: none;
}
a, a:visited {
    text-decoration: none;
    color: inherit;
}
.app-link:hover,
.app-link-icon:hover {
    color: rgb(255, 246, 230);
    cursor: pointer;
}

.app-link-icon,
.app-link-uninverted-icon {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    /* z-index: -10; */
}
.app-link:hover .app-link-icon {
    filter: invert(1)
}
</style>
