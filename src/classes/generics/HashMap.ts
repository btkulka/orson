
class HashRecord<T> {
    public key: string;
    public value: T;
    public timestamp: Date = new Date();

    constructor(
        key: string,
        value: T
    ) {
        this.key = key;
        this.value = value;

        if (!this.key || !this.value) {
            throw new Error("Key and value required for HashRecord.");
        }
    }
}

export default class Hashmap<T> {

    public name: string;
    private records: HashRecord<T>[] = [];

    constructor(
        name: string
    ) {
        this.name = name;
    }

    public contains(key: string): boolean {
        return this.records.map((r) => r.key).includes(key);
    }

    public get(key: string): T {
        return this.records.filter((r) => r.key === key)[0]?.value;
    }

    public set(key: string, value: T): HashRecord<T> {
        if (!this.contains(key)) {
            let record = new HashRecord(
                key,
                value
            )
            this.records.push(record);
            return record;
        } else {
            throw new Error(`Record with key '${key}' already exists in ${this.name}.`);
        }
    }
}