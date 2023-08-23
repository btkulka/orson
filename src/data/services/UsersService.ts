import UsersRepository from "../repositories/UsersRepository";
import AbstractService from "./AbstractService";

export default class UsersService extends AbstractService {

    private repository: UsersRepository;

    constructor(
        repository: UsersRepository
    ) {
        super();
        this.repository = repository;
    }
}