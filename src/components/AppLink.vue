<script setup lang="ts">
import { computeFontAwesome, type IconType } from '../utils/fontawesome';
import { openDecodedMailto } from '../utils/mailto';


const props = defineProps<{
    text: string,
    href: string,
    icon?: IconType,
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
    absoluteHref = `${__LINKS_APP_URL}/${props.href}`
}

</script>

<template>
    <div class="app-link">
        <a type="button" ref="aElement" :href="absoluteHref" :onclick="onclick" :target="target">
            <span v-if="icon" class="app-link-icon">
                <i :class="computeFontAwesome(icon)"></i>
            </span>
            <img v-if="uninvertedIcon" class="app-link-uninverted-icon" :src="uninvertedIcon">
            {{ text }}
        </a>
    </div>
</template>

<style scoped>
.app-link {
    border: 2px solid var(--green);
    border-radius: 30px;
    width: 80%;
    align-self: center;
    position: relative;
}
.app-link:hover {
    background-color: var(--green);
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
    color: var(--white);
    cursor: pointer;
}

.app-link-icon {
    font-size: 36px;
    width: 36px; /* same width as img.app-link-uninverted-icon => thus, every icon is aligned vertically */
}
img.app-link-uninverted-icon {
    width: 36px;
    height: 36px;
}
.app-link-icon,
.app-link-uninverted-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
}
</style>
