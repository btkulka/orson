export default class Game {
    public readonly id: string;
    public readonly guildId: string;
    public name: string;
    public created: Date;

    constructor(
        id: string,
        guildId: string,
        name: string,
        created: Date
    ) {
        this.id = id;
        this.guildId = guildId;
        this.name = name;
        this.created = created;
    }
}