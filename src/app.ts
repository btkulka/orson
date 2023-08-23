import Game from "./classes/Game";
import Session from "./classes/Session";
import ApplicationDatabaseGateway from "./data/ApplicationDatabaseGateway";
import CreateGameRequest from "./requests/game/CreateGameRequest";

export default class App {

    private static instance: App;

    private readonly instanceId: number;
    private readonly database: ApplicationDatabaseGateway;

    private constructor(
        instanceId: number
    ) {
        this.instanceId = instanceId;
        this.database = new ApplicationDatabaseGateway(this.instanceId);
    }

    public static getInstance(): App {
        if(!App.instance) {
            App.instance = new App(process.getuid());
        }

        return App.instance;
    }

    public createGameForGuild(request: CreateGameRequest): Game {
        let game = this.database.games.createGame(request);
        return game;
    }

    public getSessionForGame(gameId: string): Session {
        let session = this.database.sessions.getCurrentGameSession(gameId);
        return session;
    }
}