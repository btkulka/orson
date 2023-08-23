import AbstractGraphNode from "./abstracts/AbstractGraphNode";

export default class Room extends AbstractGraphNode {
    public name: string;
    public values: any;

    constructor(
        id: string,
        name: string,
        knowledge: string[]
    ) {
        super(id, {
            knowledge: knowledge
        });
        this.name = name;
    }

    get paths() {
        return this._edges;
    }
}