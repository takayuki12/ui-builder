import { combineLatest, map, Subject } from "rxjs";
import { getList, getPageTree, pageTree } from ".";

export const requestedNodeId = new Subject<string>();
export const nodeToEdit$ = combineLatest([requestedNodeId, getPageTree()]).pipe(
    map(([nodeId, tree]) => {
        const node = tree.find((t) => t.id == nodeId);
        if (node === undefined) return { node: undefined, element: undefined };

        return {
            node,
            element: getList().find((c) => c.id === node.componentId),
        };
    })
);
export function updateNodeData(nodeId: string, data: Record<string, any>) {
    pageTree.next(
        pageTree.getValue().map((n) => {
            if (n.id !== nodeId) return n;

            console.log("state updated");
            return {
                id: nodeId,
                componentId: n.componentId,
                values: data,
            };
        })
    );
}
