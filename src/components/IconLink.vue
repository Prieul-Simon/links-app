<script setup lang="ts">

type IconType = 
    | 'instagram'
    | 'bluesky'

const props = defineProps<{
    href: string,
    icon: IconType,
}>()

const absoluteHref = `https://links.prieul.fr/${props.href}`
const computeFontAwesome: ((icon: IconType) => string) = (icon) => {
    switch (icon) {
        case 'bluesky':
            return 'fa-brands fa-bluesky'
        case 'instagram':
            return 'fa-brands fa-instagram'
        default:
            return 'fa-solid fa-circle-question'
    }
}
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
