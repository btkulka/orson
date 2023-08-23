import CharactersRepository from "../repositories/CharactersRepository";
import AbstractService from "./AbstractService";

export default class CharactersService extends AbstractService {

    private repository: CharactersRepository;

    constructor(
        repository: CharactersRepository
    ) {
        super();
        this.repository = repository;
    }
}