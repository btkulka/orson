import AbstractNeuron from "../../../neurons/abstracts/AbstractNeuron";

export default abstract class NeuralNetwork extends AbstractNeuron {
    neurons: AbstractNeuron[]

    constructor(
        name: string,
        neurons: AbstractNeuron[]
    ) {
        super(name);
        this.neurons = neurons;
    }
}