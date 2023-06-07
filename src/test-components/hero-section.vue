<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        backgroundImage: string;
        heading: string;
        paragraph: string;
        isDark?: boolean;
    }>(),
    { isDark: false }
);
</script>

<template>
    <div
        class="w-full h-screen flex justify-center items-center"
        :style="{
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
    >
        <div
            :class="[
                'max-w-2xl text-center',
                isDark ? 'text-white' : 'text-dark',
            ]"
        >
            <h1 class="text-6xl mb-2">{{ props.heading }}</h1>
            <p class="text-lg">{{ props.paragraph }}</p>
        </div>
    </div>
</template>

<style scoped></style>
