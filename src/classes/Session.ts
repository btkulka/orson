import OrchestorBuilder from "../builders/OrchestratorBuilder";
import GameDatabaseGateway from "../data/GameDatabaseGateway";
import Orchestrator from "../neurons/Orchestrator";
import Game from "./Game";
import Player from "./Player";

export default class Session {
    public readonly id: string;
    public readonly game: Game;

    private database: DatabaseORM;
    private orchestrator: Orchestrator;

    public map: Map;
    public players: Player[];
    public knowledgeBase: KnowledgeBase;

    constructor(
        id: string,
        gameId: Game
    ) {
        this.id = id;
        this.database = new GameDatabaseGateway(gameId)
        this.loadPlayers = this.database.loadPlayers();
        this.loadMap = this.database.loadMap();
        this.loadKnowledgeBase = this.database.loadKnowledgeBase();
        this.orchestrator = OrchestorBuilder.build(
            game.id,
            knowledgeBase
        );
    }
}