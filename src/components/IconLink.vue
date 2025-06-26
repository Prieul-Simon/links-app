<script setup lang="ts">
import { computeFontAwesome, type IconType } from '../utils/fontawesome';
import Tooltip from './Tooltip.vue';


const props = defineProps<{
    href: string,
    icon: IconType,
    tooltip?: string,
}>()

const absoluteHref = `${__LINKS_APP_URL}/${props.href}`
</script>

<template>
    <a class="icon-link" type="button" :href="absoluteHref" target="_blank">
        <Tooltip v-if="tooltip"
                base-text=""
                :tooltip-text="tooltip"
                :styles="{ 
                    backgroundColor: 'var(--black)', 
                    color: 'var(--white)',
                }"
        >
            <i :class="computeFontAwesome(icon)"></i>
        </Tooltip>
        <i v-else :class="computeFontAwesome(icon)"></i>
    </a>
</template>

<style scoped>
.icon-link i {
    font-size: 1.5rem;
    color: var(--green);
}
.icon-link:hover i {
    cursor: pointer;
    filter: brightness(0.6);
}
</style>
