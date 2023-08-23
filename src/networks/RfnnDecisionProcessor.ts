import TrainingPrompt from "../classes/TrainingPrompt";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";
import AbstractDecisionTreeNeuralNetwork from "./abstracts/AbstractDecisionTreeNeuralNetwork";
import AbstractRandomForestNeuralNetwork from "./abstracts/AbstractRandomForestNeuralNetwork";

export default class RfnnDecisionProcessor extends AbstractRandomForestNeuralNetwork {

    constructor(
        name: string,
        decisionTrees: AbstractDecisionTreeNeuralNetwork[]
    ) {
        super(name, decisionTrees);
    }

    train(prompts: TrainingPrompt<AbstractNeuron>[]): void {
        throw new Error("Method not implemented.");
    }
    
}