<script setup lang="ts">
import { useDropZone } from "@vueuse/core";
import { ref } from "vue";
import { getList } from "../../core/store";
import { selectedComponentId, requestedComponentId } from "../../core/store";
import UiRenderer from "./renderer";
import { useObservable, useSubscription } from "@vueuse/rxjs";
import { getPageTree } from "../../core/store";
import { Component } from "vue";
import { getSelectedComponent } from "../../core/store";

const list = getList();
const selectedComponent = useObservable(selectedComponentId, {
    initialValue: -1,
});

const dropZoneElm = ref<HTMLElement>();
const { isOverDropZone } = useDropZone(dropZoneElm, () => {
    if (list === undefined) return;
    const element = list.find((c) => c.id === selectedComponent.value);
    if (element === undefined) return;
    requestedComponentId.next(selectedComponent.value);
    // TODO: we should have a page store, a value store

    // NOTE: When an item is added we should store the component id in a new structure, which will also contains the values

    //TODO: push element on the tree
});


useObservable(getSelectedComponent());

</script>

<template>
    <div>
        <ui-renderer />
        <div :class="[
            !isOverDropZone ? 'bg-gray-200' : 'bg-gray-300',
            'py-4 text-center',
        ]" ref="dropZoneElm">
            drag element over here
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
