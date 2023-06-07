<script setup lang="ts">
// NOTE:
// whenever we emit a new node to be updated
// we show the editor
// reset the state in order for it to take the shape of the component props
// we initialize the state if there are given values
// if no value is given, we just give it some random text
// once we are done, we update the state to trigger a render
// an we hide this component

import {
    requestedNodeId,
    nodeToEdit$,
    updateNodeData,
} from "@/core/store/editor";
import { useDraggable } from "@vueuse/core";
import { useSubscription } from "@vueuse/rxjs";
import { ref } from "vue";
import EditText from "./edit-text.vue";
import { PropTypes } from "@/core/types";

const state = ref<Record<string, any>>({});
const node = ref("");
const isOpen = ref(false);
const fields = ref<{ type: PropTypes; name: string }[]>([]);

useSubscription(
    requestedNodeId.subscribe((nodeId) => {
        node.value = nodeId;
        isOpen.value = true;
    })
);
useSubscription(
    nodeToEdit$.subscribe(({ node, element }) => {
        if (element === undefined || node === undefined) return;
        fields.value = [];
        state.value = Object.keys(element.props).reduce((store, key) => {
            fields.value.push({ name: key, type: element.props[key] });
            const defaultValue =
                element.props[key] === "string" ? "default value" : false;
            store[key] = node.values[key] || defaultValue;
            return store;
        }, {} as Record<string, any>);
    })
);

function updateState() {
    updateNodeData(node.value, state.value);
    state.value = {};
    isOpen.value = false;
}

function handleChange({ target }: Event) {
    const { value, name } = target as HTMLTextAreaElement;
    state.value = { ...state.value, [name]: value };
}

const elm = ref(null);
const { style } = useDraggable(elm, {
    initialValue: { x: 0, y: 0 },
    exact: false,
});
</script>

<template>
    <div
        v-show="isOpen"
        ref="elm"
        style="position: fixed"
        :style="style"
        class="max-w-xs px-4 py-4 shadow-lg rounded-xl fixed w-full z-10 bg-white mt-2 z-20 cursor-move"
    >
        <button
            :class="[
                'text-gray-700 font-bold text-xl w-5 h-5 bottom-5  px-4 py-4 absolute rounded-full',
                'z-10 right-2 top-2',
                isOpen ? 'rotate-45' : '',
            ]"
            @click="isOpen = !isOpen"
        >
            <div
                :class="[
                    isOpen ? 'i-carbon:add' : 'i-carbon:3d-software',
                    'absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2',
                ]"
            ></div>
        </button>
        <h3 class="text-lg font-normal mb-4">Edit: {{ node }}</h3>
        <template v-for="field in fields" :key="field.name">
            <edit-text
                v-if="field.type === 'string'"
                :label="field.name"
                :value="state[field.name]"
                @new-value="(v) => (state[field.name] = v)"
            />
            <div class="p-2 space-x-2" v-else-if="field.type === 'bool'">
                <input
                    type="checkbox"
                    v-model="state[field.name]"
                    :id="field.name"
                />
                <label :for="field.name">{{ field.name }}</label>
            </div>
        </template>
        <button
            class="ml-auto text-blue-300 border-solid border-blue-300 px-4 py-2 rounded font-bold"
            @click="updateState"
        >
            <div class="i-carbon:save"></div>
        </button>
    </div>
</template>

<style scoped></style>
