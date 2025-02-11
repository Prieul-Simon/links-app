<script setup lang="ts">

type IconType = 
    | 'instagram'
    | 'bluesky'

const props = defineProps<{
    href: string,
    icon: IconType,
}>()

const absoluteHref = props.href.startsWith('http') || props.href.startsWith('mailto:')
    ? props.href
    : `https://links.prieul.fr/${props.href}`


</script>

<template>
    <div class="icon-link">
        <a type="button" :href="absoluteHref" target="_blank">icon {{ icon }}</a>
    </div>
</template>

<style scoped>
</style>
