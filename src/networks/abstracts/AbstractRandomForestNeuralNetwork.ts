import AbstractDecisionTreeNeuralNetwork from "./AbstractDecisionTreeNeuralNetwork";
import AbstractNeuralNetwork from "./core/AbstractNeuralNetwork";

export default abstract class AbstractRandomForestNeuralNetwork extends AbstractNeuralNetwork {
    constructor(
        name: string,
        decisionTrees: AbstractDecisionTreeNeuralNetwork[]
    ) {
        super(name, decisionTrees);
    }
}