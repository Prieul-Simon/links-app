<script setup lang="ts">

type IconType = 
    | 'instagram'
    | 'bluesky'
    | 'github'
    | 'linkedin'

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
            case 'github':
            return 'fa-brands fa-github'
        case 'linkedin':
            return 'fa-brands fa-linkedin'
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
