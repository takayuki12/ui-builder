export type PropTypes = "string" | "[string]" | 'bool';
export type ComponentProp = Record<string, PropTypes>;

export type Component = {
    id: number;
    component: any;
    name: string;
    props: ComponentProp;
    values?: PropValues;
};

export type PropValues = Record<string, any>;

export type Node = {
    id: string;
    componentId: number;
    values: PropValues;
};
