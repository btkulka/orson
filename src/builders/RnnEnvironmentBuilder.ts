import TrainingDirective from "../classes/TrainingDirective";
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
        trainingPrompts: TrainingDirective[]
    ): RnnEnvironment {

        let neurons: AbstractNeuron[] = [];

        return new RnnEnvironment(name, neurons);
    }
}