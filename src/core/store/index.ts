import { Component, Tree } from "../types";
import { BehaviorSubject, Subject, map, tap } from "rxjs";

let list: Component[] = [];
export const selectedComponentId = new Subject<number>();
export const requestedComponentId = new Subject<number>();
const pageTree = new BehaviorSubject<Component[]>([]);

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
            pageTree.next([...pageTree.getValue(), component]);
            console.log(pageTree.getValue());
        })
    );
}

export function addComponent(component: Component) {
    pageTree.next([...pageTree.getValue(), component]);
}
