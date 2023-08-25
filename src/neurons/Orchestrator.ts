import TrainingDirective from "../classes/TrainingDirective";
import AbstractNeuron from "./abstracts/AbstractNeuron";
import AbstractRandomForestNeuralNetwork from "../networks/abstracts/AbstractRandomForestNeuralNetwork";
import AbstractRecurrentNeuralNetwork from "../networks/abstracts/core/AbstractRecurrentNeuralNetwork";
import RnnEnvironment from "../networks/RnnEvironment";
import RfnnDecisionProcessor from "../networks/RfnnDecisionProcessor";
import NarratorNeuron from "./NarratorNeuron";

export default class Orchestrator extends AbstractNeuron {

    // member variables
    name: string;

    // child neurons
    decisionProcessor: RfnnDecisionProcessor;
    environmentSimulator: RnnEnvironment;
    narrator: NarratorNeuron;

    constructor(
        name: string,
        decisionProcessor: AbstractRandomForestNeuralNetwork,
        narrator: NarratorNeuron,
        environmentSimulator: AbstractRecurrentNeuralNetwork
    ) {
        super(name);
        this.name = name;
        this.decisionProcessor = decisionProcessor;
        this.environmentSimulator = environmentSimulator;
        this.narrator = narrator;
    }

    public init(): void {

    }

    public train(prompts: TrainingDirective[]): void {

    }
}