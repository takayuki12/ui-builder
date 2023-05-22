import { BehaviorSubject } from "rxjs";
import { Component } from "../types";
import { h, ref } from "vue";
import { setList } from "../store";

export function init(tree: Component[]) {
    setList(tree);
}

export function renderer(element: Component) {
    const { component, props: elmprops, values } = element;
    const props: Record<string, any> = {};

    if (values) {
        Object.keys(elmprops).forEach((key) => {
            props[key] = values[key];
        });
    }

    return h(component, props);
}
