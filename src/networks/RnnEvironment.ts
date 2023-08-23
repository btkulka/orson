import TrainingPrompt from "../classes/TrainingPrompt";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";
import AbstractRecurrentNeuralNetwork from "./abstracts/core/AbstractRecurrentNeuralNetwork";

export default class RnnEnvironment extends AbstractRecurrentNeuralNetwork {

    constructor(
        name: string,
        neurons: AbstractNeuron[]
    ) {
        super(name, neurons);
    }

    train(prompts: TrainingPrompt<AbstractNeuron>[]): void {
        throw new Error("Method not implemented.");
    }
    
}