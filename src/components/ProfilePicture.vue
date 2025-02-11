<script setup lang="ts">
defineProps<{ 
    source: string,
    alt: string,
}>()
</script>

<template>
    <img :src="source" :alt="alt">
</template>

<style scoped>
img {
    width: 96px;
    height: 96px;
    border-radius: 100%;
    object-fit: contain;
}
</style>
