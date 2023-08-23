export default class TrainingPrompt<T> {

    private readonly neuralType: T
    private readonly id: string
    private readonly priority: number;
    public readonly prompt: string

    constructor(
        id: string,
        neuralType: T,
        priority: number,
        prompt: string
    ) {
        this.id = id;
        this.neuralType = neuralType;
        this.priority = priority;
        this.prompt = prompt;
    }

    public getId(): string {
        return this.id;
    }

    public isOfNeuralType(neuralType: string): boolean {
        return typeof this.neuralType === neuralType;
    }
}