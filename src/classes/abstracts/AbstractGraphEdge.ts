export default class AbstractGraphEdge {
    public readonly key: string;
    public links: string[];
    public tags: string[];
    public weight: number;

    constructor(
        key: string,
        links: string[],
        tags: string[] = [],
        weight: number = 0
    ) {
        this.key = key;
        this.links = links;
        this.tags = tags;
        this.weight = weight;
    }
}