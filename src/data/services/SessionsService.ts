import Session from "../../classes/Session";
import SessionsRepository from "../repositories/SessionsRepository";

export default class SessionsService {

    private repository: SessionsRepository;

    constructor(
        repository: SessionsRepository
    ) {
        this.repository = repository;
    }

    public getCurrentGameSession(gameId: string): Session {
        var session = this.repository.getSessionByGameId(gameId);
        if (!session) {
            // create session
        }
        return session;
    }
}