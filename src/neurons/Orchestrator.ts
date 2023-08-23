import TrainingPrompt from "../classes/TrainingPrompt";
import AbstractNeuron from "./abstracts/AbstractNeuron";
import AbstractScribeNeuron from "./abstracts/AbstractScribeNeuron";
import AbstractRandomForestNeuralNetwork from "../networks/abstracts/AbstractRandomForestNeuralNetwork";
import AbstractRecurrentNeuralNetwork from "../networks/abstracts/core/AbstractRecurrentNeuralNetwork";
import RnnEnvironment from "../networks/RnnEvironment";
import RfnnDecisionProcessor from "../networks/RfnnDecisionProcessor";

export default class Orchestrator extends AbstractNeuron {

    // member variables
    name: string;

    // child neurons
    decisionProcessor: RfnnDecisionProcessor;
    environmentSimulator: RnnEnvironment;
    narrator: AbstractScribeNeuron;

    constructor(
        name: string,
        decisionProcessor: AbstractRandomForestNeuralNetwork,
        narrator: AbstractScribeNeuron,
        environmentSimulator: AbstractRecurrentNeuralNetwork
    ) {
        super(name, []);
        this.name = name;
        this.decisionProcessor = decisionProcessor;
        this.environmentSimulator = environmentSimulator;
        this.narrator = narrator;
    }

    public init(): void {

    }

    public train(prompts: TrainingPrompt<AbstractNeuron>[]): void {

        let decisionProcessorPrompts = prompts.filter((prompt) => prompt.isOfNeuralType(typeof AbstractRandomForestNeuralNetwork));
        let narratorPrompts = prompts.filter((prompt) => prompt.isOfNeuralType(typeof AbstractScribeNeuron));
        let environmentSimulatorPrompts = prompts.filter((prompt) => prompt.isOfNeuralType(typeof AbstractRecurrentNeuralNetwork));

        this.decisionProcessor.train(decisionProcessorPrompts);
        this.narrator.train(narratorPrompts);
        this.environmentSimulator.train(environmentSimulatorPrompts);
    }
}