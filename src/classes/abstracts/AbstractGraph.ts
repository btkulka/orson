import AbstractGraphEdge from "./AbstractGraphEdge";
import AbstractGraphNode from "./AbstractGraphNode";

export default class AbstractGraph {

    public readonly id: string;
    private nodes: AbstractGraphNode[];
    private edges: AbstractGraphEdge[] = [];

    constructor(
        id: string,
        nodes: AbstractGraphNode[]
    ) {
        this.id = id;
        this.nodes = nodes;
    }
}