import Game from "../../classes/Game";
import Hashmap from "../../classes/generics/HashMap";
import CreateGameRequest from "../../requests/game/CreateGameRequest";

export default class GamesRepository {

    private cache: Hashmap<Game>;

    constructor() {
        this.cache = new Hashmap<Game>("GamesCache");
    }

    public createGame(request: CreateGameRequest): Game {
        // create the game
        throw new Error("unimplemented");
    }
}