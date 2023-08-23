import TrainingPrompt from "../../classes/TrainingPrompt";
import AbstractNeuron from "./AbstractNeuron";

export default abstract class AbstractScribeNeuron extends AbstractNeuron {

    constructor(
        name: string,
        trainingPrompts: TrainingPrompt<AbstractScribeNeuron>[]
    ) {
        super(name, trainingPrompts);
    }

    train(prompts: TrainingPrompt<AbstractScribeNeuron>[]): void {
        throw new Error("Method not implemented.");
    }
}