export default class Player {
    public readonly id: string;
    public readonly profileId: string;
    public readonly userId: string;
    public readonly name: string;

    constructor(
        id: string,
        profileId: string,
        userId: string,
        name: string
    ) {
        this.id = id;
        this.profileId = profileId;
        this.userId = userId;
        this.name = name;
    }
}