import ScenesRepository from "../repositories/ScenesRepository";
import AbstractService from "./AbstractService";

export default class ScenesService extends AbstractService {

    private repository: ScenesRepository;

    constructor(
        repository: ScenesRepository
    ) {
        super();
        this.repository = repository;
    }
}