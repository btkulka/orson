import { ChatMessage } from "chatgpt";
import LanguageModelNeuron from "./abstracts/LanguageModelNeuron";
import TrainingDirective from "../classes/TrainingDirective";

export default class NarratorNeuron extends LanguageModelNeuron {
    constructor(
        name: string
    ) {
        super(name);
    }

    async train(prompts: TrainingDirective[]): Promise<ChatMessage[]> {
        throw Error("unimplemented");
    }

    async sendMessage(message: string, options: any): Promise<ChatMessage> {
        throw Error("unimplemented");
    }
}