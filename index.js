'use strict';

//---------------------------------------------------------------------------------------------------------------//

const querystring = require('querystring');
const axios = require('axios');

//---------------------------------------------------------------------------------------------------------------//

/**
 * @typedef {{
 *  language: String,
 *  text: String,
 * }} GoogleTranslateTTSOptions
 */

//---------------------------------------------------------------------------------------------------------------//

class GoogleTranslateTTS {
    language='en-us';
    text='hello world';

    /**
     * Constructs a new GoogleTranslateTTS
     * @param {GoogleTranslateTTSOptions} opts 
     */
    constructor(opts={}) {
        if (typeof opts !== 'object') throw new TypeError('\`options\` is not an \`object\`');
        if (opts.language && typeof opts.language !== 'string') throw new TypeError('\`opts.language\` is not a \`string\`');
        if (opts.text && typeof opts.text !== 'string') throw new TypeError('\`opts.text\` is not a \`string\`');

        this.language = opts.language ?? this.language;
        this.text = opts.text ?? this.text;
    }

    /**
     * @property {String} stream_url
     */
    get stream_url() {
        const stream_url_parameters = querystring.stringify({
            'ie': 'UTF-8',
            'client': 'tw-ob',
            'tl': `${this.language}`,
            'q': `${this.text}`
        });

        return `https://translate.google.com/translate_tts?${stream_url_parameters}`;
    }

    /**
     * Returns a ReadableStream
     * @returns {import('stream').Readable} a ReadableStream
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

module.exports = {
    GoogleTranslateTTS,
};
