import TrainingPrompt from "../../classes/TrainingPrompt";
import AbstractNeuron from "./AbstractNeuron";

export default abstract class AbstractObserverNeuron extends AbstractNeuron {
    constructor(
        name: string,
        trainingPrompts: TrainingPrompt<AbstractObserverNeuron>[]
    ) {
        super(name, trainingPrompts);
    }

    train(prompts: TrainingPrompt<AbstractNeuron>[]): void {
        throw new Error("Method not implemented.");
    }
}