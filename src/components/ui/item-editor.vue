<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const state = ref<Record<string, any>>({});

const props = defineProps<{ nodeId: number }>();

const emits = defineEmits<{
    (e: "onInput", value: string): void;
}>();

function handleChange(value: string) {
    emits("onInput", value);
}
</script>

<template>
    <div class="relative">
        <div @click="open = !open" class="cursor-pointer">
            <slot></slot>
        </div>
        <div
            v-if="open"
            class="max-w-xs px-3 py-2 shadow rounded absolute top-full left-0 w-full z-10 bg-white mt-2"
        >
            <h3 class="text-lg font-normal mb-4">Edit: {{ "component id" }}</h3>
            <textarea
                class="w-full border rounded"
                @input="($e) => handleChange (($e.target as HTMLTextAreaElement).value)"
            />
        </div>
    </div>
</template>

<style scoped></style>
