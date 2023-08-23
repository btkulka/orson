import AbstractNeuron from "../../neurons/abstracts/AbstractNeuron";
import AbstractNeuralNetwork from "./core/AbstractNeuralNetwork";

export default abstract class AbstractDecisionTreeNeuralNetwork extends AbstractNeuralNetwork {
    constructor(
        name: string,
        neurons: AbstractNeuron[]
    ) {
        super(name, neurons);
    }
}