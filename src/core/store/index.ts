import { Component, Node } from "../types";
import { BehaviorSubject, map, Subject, tap } from "rxjs";
import { v4 as uuid } from "uuid";

let list: Component[] = [];
export const selectedComponentId = new Subject<number>();
export const requestedComponentId = new Subject<number>();
export const pageTree = new BehaviorSubject<Node[]>([]);

export function setList(tree: Component[]) {
    list = tree;
}

export function getList() {
    return list;
}

export function getPageTree() {
    return pageTree.asObservable();
}
export function getSelectedComponent() {
    return requestedComponentId.pipe(
        map((id) => {
            return list.find((c) => c.id === id);
        }),
        tap((component) => {
            if (component === undefined) return;
            const node = {
                id: uuid(),
                componentId: component.id,
                values: {},
            };
            console.log("get select component called, nodeid = ", node.id);
            pageTree.next([...pageTree.getValue(), node]);
        })
    );
}

// export function addComponent(component: Component) {
//     const node = {
//         id: uuid(),
//         componentId: component.id,
//         values: {},
//     };
//
//     pageTree.next([...pageTree.getValue(), node]);
// }
