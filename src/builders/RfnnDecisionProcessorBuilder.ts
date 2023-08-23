import TrainingPrompt from "../classes/TrainingPrompt";
import RfnnDecisionProcessor from "../networks/RfnnDecisionProcessor";
import AbstractDecisionTreeNeuralNetwork from "../networks/abstracts/AbstractDecisionTreeNeuralNetwork";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";

export default class RfnnDecisionProcessorBuilder {
    private static instance: RfnnDecisionProcessorBuilder;

    private constructor() { }

    public static getInstance(): RfnnDecisionProcessorBuilder {
        if (!RfnnDecisionProcessorBuilder.instance) {
            RfnnDecisionProcessorBuilder.instance = new RfnnDecisionProcessorBuilder();
        }

        return RfnnDecisionProcessorBuilder.instance;
    }

    public static build(
        name: string,
        trainingPrompts: TrainingPrompt<AbstractNeuron>[]
    ): RfnnDecisionProcessor {

        let decisionTrees: AbstractDecisionTreeNeuralNetwork[] = [];

        return new RfnnDecisionProcessor(name, decisionTrees);
    }
}