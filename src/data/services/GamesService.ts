import Game from "../../classes/Game";
import CreateGameRequest from "../../requests/game/CreateGameRequest";
import GamesRepository from "../repositories/GamesRepository";
import AbstractService from "./AbstractService";

export default class GamesService extends AbstractService {

    private repository: GamesRepository;

    constructor(
        repository: GamesRepository
    ) {
        super();
        this.repository = repository;
    }

    public createGame(request: CreateGameRequest): Game {
        var game = this.repository.createGame(request);
        //this.initializeGame(game);
        return game;
    }
}