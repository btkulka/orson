import AbstractGraphEdge from "./AbstractGraphEdge";

export default class AbstractGraphNode {
    public readonly id: string;
    protected _values: any;
    protected _edges: AbstractGraphEdge[];

    constructor(
        id: string,
        values: any = {},
        edges: AbstractGraphEdge[] = []
    ) {
        this.id = id;
        this._values = values ?? {};
        this._edges = edges ;
    }
}