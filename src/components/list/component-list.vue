<script setup lang="ts">
import { ref } from "vue";
import { Presence, Motion } from "motion/vue";
import { Component } from "@/core/types";
import { watch } from "vue";
import { useDraggable } from "@vueuse/core";
import { selectedComponentId } from "@/core/store";
import { useObservable } from "@vueuse/rxjs";

const isOpen = ref(true);
defineProps<{ list: Component[] }>();

const elms = ref<HTMLElement[]>();

// const selectedComponent = useObservable(selectedComponentId, {
//     initialValue: -1,
// });
watch(elms, () => {
    if (elms.value === undefined || elms.value.length === 0) return;
    elms.value.forEach((elm) => {
        useDraggable(elm, {
            onStart: ({ x, y }) => {
              selectedComponentId.next(+elm.dataset.id!);
            },
        });
    });
});
</script>

<template>
    <div
        class="fixed bg-white z-10 bottom-0 left-1/2 w-full max-w-xl -translate-x-1/2 bottom-20"
    >
        <Presence>
            <Motion
                v-if="isOpen"
                :initial="{ opacity: 0, y: 100 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: 100 }"
                class="shadow h-96 rounded-lg"
            >
                <h1 class="text-lg text-gray-700">List des elements</h1>

                <div>
                    <div
                        v-for="item in list"
                        :key="item.id"
                        :class="['px-4 hover:bg-gray-50 cursor-move py-2']"
                        ref="elms"
                        draggable="true"
                        :data-id="item.id"
                    >
                        <div
                            class="i-typcn:sort-alphabetically inline-block text-lg"
                        ></div>
                        {{ item.name }}
                    </div>
                </div>
            </Motion>
        </Presence>
    </div>

    <button
        :class="[
            'text-gray-700 font-bold text-xl w-10 h-10 bottom-5  px-4 py-4 fixed shadow-lg rounded-full',
            'z-10 -translate-x-1/2 left-1/2',
            'hover:bg-blue-400 hover:text-white',
            isOpen ? 'bg-blue-400 text-white rotate-45' : '',
        ]"
        @click="isOpen = !isOpen"
    >
        <div
            :class="[
                `i-carbon:${isOpen ? 'add' : '3d-software'}`,
                'absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2',
            ]"
        ></div>
    </button>
</template>

<style scoped></style>
