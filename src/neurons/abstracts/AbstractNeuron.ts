import TrainingPrompt from "../../classes/TrainingPrompt";

export default abstract class AbstractNeuron {

    readonly name: string;
    knowledge: string[] = [];

    constructor(
        name: string,
        trainingPrompts: TrainingPrompt<AbstractNeuron>[] = []
    ) {
        this.name = name;

        if (trainingPrompts.length > 0) {
            this.train(trainingPrompts);
        }
    }

    abstract train(prompts: TrainingPrompt<AbstractNeuron>[]): void;
}