import { ChatGPTAPI, ChatMessage } from "chatgpt";
import TrainingDirective from "../../classes/TrainingDirective";
import AbstractNeuron from "./AbstractNeuron";

export default abstract class LanguageModelNeuron extends AbstractNeuron {

    protected languageModel: ChatGPTAPI;

    constructor(
        name: string
    ) {
        super(name);

        this.languageModel = new ChatGPTAPI({
            apiKey: globalThis.config.OpenAi.apiKey
        });
    }

    abstract train(prompts: TrainingDirective[]): void;

    abstract sendMessage(message: string, options: any): Promise<ChatMessage>;
}