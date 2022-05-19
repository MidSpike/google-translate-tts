export class GoogleTranslateTTS {
    language: string;
    text: string;

    constructor(
        options: {
            language: string;
            text: string;
        },
    );

    get stream_url(): string;

    stream(): Promise<import('node:stream').Readable>;
}
