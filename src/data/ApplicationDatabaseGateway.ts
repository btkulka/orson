import GamesRepository from "./repositories/GamesRepository";
import SessionsRepository from "./repositories/SessionsRepository";
import GamesService from "./services/GamesService";
import SessionsService from "./services/SessionsService";

export default class ApplicationDatabaseGateway {

    private readonly instanceId: number;

    public games: GamesService;
    public sessions: SessionsService;
    
    constructor(
        instanceId: number
    ) {
        this.instanceId = instanceId;

        this.sessions = new SessionsService(new SessionsRepository());
        this.games = new GamesService(new GamesRepository());
    }
}