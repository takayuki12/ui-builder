import { computed, h } from "vue";
import { useObservable, useSubscription, useSubject } from "@vueuse/rxjs";
import {
    getPageTree,
    getSelectedComponent,
    requestedComponentId,
} from "@/core/store";
import { renderer } from "@/core/builder";
import { Component } from "@/core/types";

function UIRenderer() {
    const tree = useObservable(getPageTree(), {
        initialValue: [] as Component[],
    });

    return h("div", {}, tree.value.map(renderer));
}

export default UIRenderer;
