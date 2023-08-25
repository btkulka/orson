import * as fs from 'fs';
import KnowledgeNeuron from './neurons/KnowledgeNeuron';
import TrainingDirective from './classes/TrainingDirective';
import Config from './classes/generics/Config';

declare global {
    var config: Config;
}

globalThis.config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const main = async () => {
    let prompt = fs.readFileSync('../data/prompts/EncyclopediaDirective.txt', 'utf-8');
    let trainingPrompts: TrainingDirective[] = [
        new TrainingDirective(
            "1",
            1,
            prompt
        )
    ];

    const encylopedia = new KnowledgeNeuron("jones");
    await encylopedia.train(trainingPrompts);

    await encylopedia.sendMessage("What is the oldest tree in Mythosia?");
}

main();