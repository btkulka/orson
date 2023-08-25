export default class TrainingPrompt {

    private readonly id: string
    private readonly priority: number;
    public readonly prompt: string

    constructor(
        id: string,
        priority: number,
        prompt: string
    ) {
        this.id = id;
        this.priority = priority;
        this.prompt = prompt;
    }

    public getId(): string {
        return this.id;
    }
}