import GameDatabaseGateway, { GameDatabaseGatewayProps } from "../data/GameDatabaseGateway";


export default class Session {
    public readonly id: string;

    private db: GameDatabaseGateway;

    constructor(
        id: string,
        gameId: string
    ) {
        this.id = id;
        this.db = new GameDatabaseGateway({
            gameId: gameId,
            baseUrl: ''
        } as GameDatabaseGatewayProps)
    }
}