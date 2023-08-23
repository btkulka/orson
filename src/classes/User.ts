export default class User {
    public readonly id: string;
    public username: string;

    constructor(
        id: string,
        username: string
    ) {
        this.id = id;
        this.username = username;
    }
}