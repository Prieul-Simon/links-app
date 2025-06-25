<!-- Inspired by https://www.w3schools.com/css/css_tooltip.asp -->

<script setup lang="ts">
const {
    baseText,
    tooltipText,
    isUnderlined,
    styles,
} = defineProps<{
    baseText?: string,
    tooltipText: string,
    isUnderlined?: boolean,
    styles: {
      backgroundColor: string,
      color: string,
    },
}>()
</script>

<template>
    <div class="tooltipoverme" :class="{underlined: isUnderlined}">
        {{ baseText }}
        <slot></slot>
        <span class="tooltiptext">{{ tooltipText }}</span>
    </div>
</template>

<style lang="css" scoped>
.tooltipoverme {
  position: relative;
  display: inline-block;
}

.tooltipoverme.underlined {
  border-bottom: 1px dotted black;
}

.tooltipoverme .tooltiptext {
  visibility: hidden;
  background-color: v-bind('styles.backgroundColor');
  color: v-bind('styles.color');
  opacity: 0.8;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%)
}

.tooltipoverme:hover .tooltiptext {
  visibility: visible;
}
</style>