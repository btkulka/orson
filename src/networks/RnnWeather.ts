import TrainingPrompt from "../classes/TrainingPrompt";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";
import AbstractRecurrentNeuralNetwork from "./abstracts/core/AbstractRecurrentNeuralNetwork";

export default class RnnWeather extends AbstractRecurrentNeuralNetwork {
    constructor(
        name: string,
        neurons: [AbstractNeuron]
    ) {
        super(name, neurons);
    }

    train(prompts: TrainingPrompt<AbstractRecurrentNeuralNetwork>[]): void {
        throw new Error("Method not implemented.");
    }
}