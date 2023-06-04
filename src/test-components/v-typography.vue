<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>

<template>
    <div class="py-2">
        {{ props.text }}
    </div>
</template>

<style lang="scss" scoped></style>
