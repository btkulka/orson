import Session from "../../classes/Session";
import Hashmap from "../../classes/generics/HashMap";

export default class SessionsRepository {

    private cache: Hashmap<Session>;

    constructor() {
        this.cache = new Hashmap<Session>("SessionsCache");
    }

    public getSessionByGameId(gameId: string) {
        var session: Session = this.cache.get(gameId);
        if (!session) {
            session = this.createSession(gameId);
        }
        return session;
    }

    public createSession(gameId: string): Session {
        // create session
        throw Error("unimplemented");
    }
}