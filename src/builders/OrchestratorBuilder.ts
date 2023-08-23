import Orchestrator from "../neurons/Orchestrator";
import RnnEnvironment from "../networks/RnnEvironment";
import RfnnDecisionProcessor from "../networks/RfnnDecisionProcessor";
import NarratorNeuron from "../neurons/NarratorNeuron";
import RnnEnvironmentBuilder from "./RnnEnvironmentBuilder";
import RfnnDecisionProcessorBuilder from "./RfnnDecisionProcessorBuilder";
import Defaults from "../constants/enums/Defaults";
import Profile from "../classes/Profile";

export default class OrchestorBuilder {
    private static instance: OrchestorBuilder;

    private constructor() { }

    public static getInstance(): OrchestorBuilder {
        if (!OrchestorBuilder.instance) {
            OrchestorBuilder.instance = new OrchestorBuilder();
        }

        return OrchestorBuilder.instance;
    }

    public static build(
        profile: Profile
    ): Orchestrator {

        let decisionProcessor: RfnnDecisionProcessor = RfnnDecisionProcessorBuilder.build(Defaults.DecisionProcessorName, []);
        let narrator: NarratorNeuron = new NarratorNeuron(Defaults.NarratorName, []);
        let environmentSimulator: RnnEnvironment = RnnEnvironmentBuilder.build(Defaults.EnvironmentSimulatorName, []);

        return new Orchestrator(
            Defaults.OrchestratorName,
            decisionProcessor,
            narrator,
            environmentSimulator
        );
    }
}