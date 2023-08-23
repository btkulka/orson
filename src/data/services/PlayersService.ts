import PlayersRepository from "../repositories/PlayersRepository";
import AbstractService from "./AbstractService";

export default class PlayersService extends AbstractService {

    private repository: PlayersRepository;

    constructor(
        repository: PlayersRepository
    ) {
        super();
        this.repository = repository;
    }
}