import ProfilesRepository from "../repositories/ProfilesRepository";
import AbstractService from "./AbstractService";

export default class ProfilesService extends AbstractService {

    private repository: ProfilesRepository;

    constructor(
        repository: ProfilesRepository
    ) {
        super();
        this.repository = ProfilesRepository;
    }
}