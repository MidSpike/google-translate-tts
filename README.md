# google-translate-tts

## Installation
```
npm i github:MidSpike/google-translate-tts
```

## Usage
```js
const fs = require('fs');
const { GoogleTranslateTTS } = require('google-translate-tts');

async function main() {
    // creates an instance of a GoogleTranslateTTS
    const gt_tts = new GoogleTranslateTTS({
        language: 'en-us',
        text: 'Hello world!',
    });

    // creates a readable stream from the GoogleTranslateTTS instance
    const gt_tts_stream = await gt_tts.stream();

    // saves the readable stream to an mp3 file
    gt_tts_stream.pipe(fs.createWriteStream('./test.mp3'));
}
main();
```

## Legal
[Copyright MIT License](COPYRIGHT.md)
