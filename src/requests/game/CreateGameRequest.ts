export default class CreateGameRequest {
    public guildId: string;
    public name: string;

    constructor(
        guildId: string,
        name: string
    ) {
        this.guildId = guildId;
        this.name = name;
    }
}