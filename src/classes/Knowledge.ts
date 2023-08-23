export default class Knowledge {

    public readonly id: string;
    public readonly knowledge: string;
    public readonly links: string[];
    public readonly profileId: string;

    constructor(
        id: string,
        knowledge: string,
        links: string[],
        profileId: string
    ) {
        this.id = id;
        this.knowledge = knowledge;
        this.links = links;
        this.profileId = profileId;
    }

}