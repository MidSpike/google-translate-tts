export class GoogleTranslateTTS {
    language: string;
    text: string;

    constructor(
        options: {
            language: string;
            text: string;
        },
    ) {
        this.language = options.language;
        this.text = options.text;
    }

    get stream_url(): string {}

    async stream(): Promise<import('node:stream').Readable> {}
}
