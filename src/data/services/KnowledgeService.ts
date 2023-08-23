import KnowledgeRepository from "../repositories/KnowledgeRepository";
import AbstractService from "./AbstractService";

export default class KnowledgeService extends AbstractService {

    private repository: KnowledgeRepository;

    constructor(
        repository: KnowledgeRepository
    ) {
        super();
        this.repository = repository;
    }
}