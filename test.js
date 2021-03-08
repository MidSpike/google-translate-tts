
const fs = require('fs');
const { GoogleTranslateTTS } = require('./index.js');

async function main() {
    const gt_tts = new GoogleTranslateTTS({
        language: 'en-us',
        text: 'Hello world!',
    });

    console.log('[TEST] > Creating Stream...');
    const gt_tts_stream = await gt_tts.stream();
    console.log('[TEST] > Created Stream');

    console.log('[TEST] > Saving Stream...');
    gt_tts_stream.pipe(fs.createWriteStream('./test.mp3'));
    console.log('[TEST] > Saved Stream to ./test.mp3');

    console.log('[TEST] > Confirm this test by playing the file');
}
main();
