import { BehaviorSubject } from "rxjs";
import { Component, Node } from "../types";
import { h, ref } from "vue";
import { getList, setList } from "../store";
import Editor from "@/components/ui/item-editor.vue";

export function init(tree: Component[]) {
    setList(tree);
}

export function renderer(node: Node) {
    const element = getList().find((c) => c.id === node.componentId)!;

    const { component, props: elmprops } = element;
    const props: Record<string, any> = {};

    Object.keys(elmprops).forEach((key) => {
        props[key] = node.values[key] || "default value";
    });

    return h(
        Editor,
        {
            nodeId: node.id,
            onClick: () => {
                // load component state
            },
            onOnInput: (value: string) => {
                // we need to know which property has changed
            },
        },
        [h(component, { ...props })]
    );
}
