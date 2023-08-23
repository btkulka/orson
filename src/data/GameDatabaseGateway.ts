import CharactersService from "./services/CharactersService";
import KnowledgeService from "./services/KnowledgeService";
import PlayersService from "./services/PlayersService";
import ProfilesService from "./services/ProfilesService";
import RoomsService from "./services/RoomsService";
import ScenesService from "./services/ScenesService";
import UsersService from "./services/UsersService";

export class GameDatabaseGatewayProps {
    public baseUrl: string;

    constructor(props: any = {}) {
        this.baseUrl = props.baseUrl;
    }
}

export default class GameDatabaseGateway {

    public characters: CharactersService;
    public knowledge: KnowledgeService;
    public players: PlayersService;
    public profiles: ProfilesService;
    public rooms: RoomsService;
    public scenes: ScenesService;
    public users: UsersService;

    constructor(props: GameDatabaseGatewayProps) {
        this.characters = new CharactersService(props);
        this.knowledge = new KnowledgeService(props);
        this.players = new PlayersService(props);
        this.profiles = new ProfilesService(props);
        this.rooms = new RoomsService(props);
        this.scenes = new ScenesService(props);
        this.users = new UsersService(props);
    }
}
