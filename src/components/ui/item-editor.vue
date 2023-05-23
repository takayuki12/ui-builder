<script setup lang="ts">
import { requestedNodeId } from "@/core/store/editor";
import { useObservable } from "@vueuse/rxjs";
import { ref } from "vue";

const open = ref(false);
const state = ref<Record<string, any>>({});

const props = defineProps<{ nodeId: string }>();

const emits = defineEmits<{
    (e: "onInput", value: string): void;
}>();

function requestNode() {
    requestedNodeId.next(props.nodeId);
}
</script>

<template>
    <div
        :class="[
            'relative border-solid  hover:border-blue-300',
            open ? 'border-blue-300' : 'border-transparent',
        ]"
    >
        <div @click="requestNode" class="cursor-pointer">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>
