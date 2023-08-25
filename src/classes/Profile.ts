import { GameDatabaseGatewayProps } from "../data/GameDatabaseGateway";

export default class Profile {
    public readonly id: string;
    public name: string;
    public databaseProps: GameDatabaseGatewayProps;

    constructor(
        id: string,
        name: string,
        databaseProps: GameDatabaseGatewayProps
    ) {
        this.id = id;
        this.name = name;
        this.databaseProps = databaseProps;
    }
}