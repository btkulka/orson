import AbstractNeuron from "../../../neurons/abstracts/AbstractNeuron";
import AbstractNeuralNetwork from "./AbstractNeuralNetwork";

export default abstract class AbstractRecurrentNeuralNetwork extends AbstractNeuralNetwork {
    constructor(
        name: string,
        neurons: AbstractNeuron[]
    ) {
        super(name, neurons);
    }
}