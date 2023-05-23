import { computed, h } from "vue";
import { useObservable, useSubject, useSubscription } from "@vueuse/rxjs";
import {
    getPageTree,
    getSelectedComponent,
    requestedComponentId,
} from "@/core/store";
import { renderer } from "@/core/builder";
import { Component, Node } from "@/core/types";
import ItemEditor from "./item-editor.vue";

function UIRenderer() {
    const tree = useObservable(getPageTree(), {
        initialValue: [] as Node[],
    });

    return h("div", {}, tree.value.map(renderer));
}

export default UIRenderer;
