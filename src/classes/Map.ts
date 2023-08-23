import Room from "./Room";
import AbstractGraph from "./abstracts/AbstractGraph";

export default class Map extends AbstractGraph {

    public name: string;

    constructor(
        id: string,
        name: string,
        rooms: Room[]
    ) {
        super(id, rooms);
        this.name = name;
    }
}