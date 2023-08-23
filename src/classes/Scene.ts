import Knowledge from "./Knowledge";

export default class Scene {
    public id: string;
    public name: string;
    public roomId: string;
    public characterIds: string[];
    public knowledge: Knowledge[];
    public description: string;

    constructor(
        id: string,
        name: string,
        roomId: string,
        characterIds: string[],
        description: string,
        knowledge: Knowledge[] = []
    ) {
        this.id = id;
        this.name = name;
        this.roomId = roomId;
        this.description = description;
        this.characterIds = characterIds;
        this.knowledge = knowledge;
    }
}