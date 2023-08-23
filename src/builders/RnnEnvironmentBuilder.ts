import TrainingPrompt from "../classes/TrainingPrompt";
import RnnEnvironment from "../networks/RnnEvironment";
import AbstractNeuron from "../neurons/abstracts/AbstractNeuron";

export default class RnnEnvironmentBuilder {
    private static instance: RnnEnvironmentBuilder;

    private constructor() { }

    public static getInstance(): RnnEnvironmentBuilder {
        if (!RnnEnvironmentBuilder.instance) {
            RnnEnvironmentBuilder.instance = new RnnEnvironmentBuilder();
        }

        return RnnEnvironmentBuilder.instance;
    }

    public static build(
        name: string,
        trainingPrompts: TrainingPrompt<AbstractNeuron>[]
    ): RnnEnvironment {

        let neurons: AbstractNeuron[] = [];

        return new RnnEnvironment(name, neurons);
    }
}