import { ChatMessage, SendMessageOptions } from "chatgpt";
import TrainingDirective from "../classes/TrainingDirective";
import LanguageModelNeuron from "./abstracts/LanguageModelNeuron";

export default class KnowledgeNeuron extends LanguageModelNeuron {

    constructor(
        name: string
    ) {
        super(name);
    }

    async train(prompts: TrainingDirective[]): Promise<ChatMessage[]> {
        return Promise.all(prompts.map(async (prompt) => {
            this.directives.push(prompt.prompt);
            return await this.sendMessage(prompt.prompt);
        })).then((responses) => {
            return responses;
        });
    }

    async sendMessage(message: string, options: SendMessageOptions = {}): Promise<ChatMessage> {

        if (this.directives.length === 0) {
            throw new Error(`${this.name} has not yet been trained.`);
        }

        Object.assign(globalThis.config.OpenAi.defaultCompletionParams, options);
        return this.languageModel.sendMessage(message, options);
    }
}
