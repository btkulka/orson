import TrainingDirective from "../classes/TrainingDirective";
import AbstractDecisionTreeNeuralNetwork from "./abstracts/AbstractDecisionTreeNeuralNetwork";
import AbstractRandomForestNeuralNetwork from "./abstracts/AbstractRandomForestNeuralNetwork";

export default class RfnnDecisionProcessor extends AbstractRandomForestNeuralNetwork {

    constructor(
        name: string,
        decisionTrees: AbstractDecisionTreeNeuralNetwork[]
    ) {
        super(name, decisionTrees);
    }

    train(prompts: TrainingDirective[]): void {
        throw new Error("Method not implemented.");
    }
    
}