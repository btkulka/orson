export default class ConfigReader {
    private static instance: ConfigReader;

    private constructor() { }

    public static getInstance(): ConfigReader {
        if(!ConfigReader.instance) {
            ConfigReader.instance = new ConfigReader();
        }

        return ConfigReader.instance;
    }

    public read(key: string): any {
        return undefined;
    }
}