<script setup lang="ts">
import { formatLabel } from "./functions";
const props = defineProps<{ label: string; value: string }>();
const emit = defineEmits<{ (event: "newValue", data: string): void }>();
</script>

<template>
    <div class="flex flex-col my-2 mx-2">
        <label>{{ formatLabel(props.label) }}</label>
        <input
            class="w-full border-solid border-gray-200 focus:border-blue-200 focus:outline-none rounded px-4 py-1"
            hover="border-blue-200"
            :value="props.value"
            @input="($e: any) => emit('newValue', $e.target.value)"
        />
    </div>
</template>
