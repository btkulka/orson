import TrainingDirective from "../../classes/TrainingDirective";

export default abstract class AbstractNeuron {

    readonly name: string;
    directives: string[] = [];

    constructor(
        name: string
    ) {
        this.name = name;
    }

    abstract train(prompts: TrainingDirective[]): void;
}