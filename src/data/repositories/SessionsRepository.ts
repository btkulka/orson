import Session from "../../classes/Session";
import Hashmap from "../../classes/generics/HashMap";

export default class SessionsRepository {

    private cache: Hashmap<Session>;

    constructor() {
        this.cache = new Hashmap<Session>("SessionsCache");
    }

    private getSessionByGameId(gameId: string) {
        var session: Session = this.cache.get(gameId);
        if (!session) {
            session = this.createSession(gameId);
        }
        return session;
    }

    private createSession(gameId: string): Session {
        // create session
        return undefined;
    }
}