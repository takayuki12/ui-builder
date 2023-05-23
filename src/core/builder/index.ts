import { BehaviorSubject } from "rxjs";
import { Component } from "../types";
import { h, ref } from "vue";
import { setList } from "../store";
import Editor from "@/components/ui/item-editor.vue";

export function init(tree: Component[]) {
    setList(tree);
}

const state = ref({ text: "" });
export function renderer(element: Component) {
    const { component, props: elmprops, values } = element;
    const props: Record<string, any> = {};

    if (values) {
        Object.keys(elmprops).forEach((key) => {
            props[key] = values[key];
        });
    }


    return h(
        Editor,
        {
            nodeId: element.id,
            class: "hover:bg-blue-300",
            onClick: () => {
                // load component state
            },
            onOnInput: (value: string) => {
                state.value.text = value;
                console.log(state.value);
            },
        },
        [h(component, { ...props, text: state.value.text })]
    );
}
