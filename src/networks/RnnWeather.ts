import TrainingDirective from "../classes/TrainingDirective";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";
import AbstractRecurrentNeuralNetwork from "./abstracts/core/AbstractRecurrentNeuralNetwork";

export default class RnnWeather extends AbstractRecurrentNeuralNetwork {
    constructor(
        name: string,
        neurons: [AbstractNeuron]
    ) {
        super(name, neurons);
    }

    train(prompts: TrainingDirective[]): void {
        throw new Error("Method not implemented.");
    }
}