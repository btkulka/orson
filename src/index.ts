import App from "./app";
import CreateGameRequest from "./requests/game/CreateGameRequest";

const app = App.getInstance();

const createGameRequest = new CreateGameRequest(
    "Sandbox",
    "Sandbox"
);

let game = app.createGameForGuild(createGameRequest);
let session = app.getGameSession(game.id);