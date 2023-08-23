import TrainingPrompt from "../classes/TrainingPrompt";
import AbstractScribeNeuron from "./abstracts/AbstractScribeNeuron";

export default class NarratorNeuron extends AbstractScribeNeuron {
    constructor(
        name: string,
        trainingPrompts: TrainingPrompt<NarratorNeuron>[]
    ) {
        super(name, trainingPrompts);
    }
}