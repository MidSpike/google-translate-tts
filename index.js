'use strict';

//------------------------------------------------------------//

const axios = require('axios');

//------------------------------------------------------------//

/// <reference path="./index.d.ts" />

//------------------------------------------------------------//

class GoogleTranslateTTS {
    language;
    text;

    /**
     * Constructs a new GoogleTranslateTTS instance
     */
    constructor(options) {
        if (typeof options !== 'object') throw new TypeError('\`options\` must be an \`object\`');
        if (options.language && typeof options.language !== 'string') throw new TypeError('\`options.language\` must be a \`string\`');
        if (options.text && typeof options.text !== 'string') throw new TypeError('\`options.text\` must be a \`string\`');

        this.language = options.language ?? 'en-us';
        this.text = options.text ?? 'hello world';
    }

    /**
     * Returns the url used in the stream
     */
    get stream_url() {
        const stream_url_parameters = new URLSearchParams({
            'ie': 'UTF-8',
            'client': 'tw-ob',
            'tl': `${this.language}`,
            'q': `${this.text}`,
        });

        return `https://translate.google.com/translate_tts?${stream_url_parameters}`;
    }

    /**
     * Returns a readable stream
     */
    async stream() {
        const { data: response_stream } = await axios({
            method: 'get',
            url: this.stream_url,
            responseType: 'stream',
        });

        return response_stream;
    }
}

//------------------------------------------------------------//

module.exports = {
    GoogleTranslateTTS,
};
