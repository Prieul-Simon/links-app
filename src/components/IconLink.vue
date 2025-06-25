<script setup lang="ts">
import { computeFontAwesome, type IconType } from '../utils/fontawesome';


const props = defineProps<{
    href: string,
    icon: IconType,
}>()

const absoluteHref = `https://links.prieul.fr/${props.href}`
</script>

<template>
    <a class="icon-link" type="button" :href="absoluteHref" target="_blank">
        <i :class="computeFontAwesome(icon)"></i>
    </a>
</template>

<style scoped>
.icon-link {
    font-size: 1.5rem;
    color: var(--green);
}
.icon-link:hover {
    cursor: pointer;
    filter: brightness(0.6);
}
</style>
