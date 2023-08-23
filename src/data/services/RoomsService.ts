import RoomsRepository from "../repositories/RoomsRepository";
import AbstractService from "./AbstractService";

export default class RoomsService extends AbstractService {

    private repository: RoomsRepository;

    constructor(
        repository: RoomsRepository
    ) {
        super();
        this.repository = repository;
    }
}