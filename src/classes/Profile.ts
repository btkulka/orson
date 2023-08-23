import { DatabaseORMProps } from "../data/GameDatabaseGateway";

export default class Profile {
    public readonly id: string;
    public name: string;
    public databaseProps: DatabaseORMProps;

    constructor(
        id: string,
        name: string,
        databaseProps: DatabaseORMProps
    ) {
        this.id = id;
        this.name = name;
        this.databaseProps = databaseProps;
    }
}