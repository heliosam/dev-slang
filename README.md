# Dev slang 💬

Visit our webpage https://devslang.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/a08fd526-4dde-46f0-beb5-1dcd986bdb32/deploy-status)](https://app.netlify.com/sites/devslang/deploys)

# What is all this about?

As a software developer, when you are working with computers, you don't have to talk to them (normally). However there are times when you need to talk to a human colleague about the code you just created, it is then when sometimes it becomes difficult or confusing how to pronounce symbols such as `[`, `;`, `~`... This repo will try to collect all these characters and symbols and the proper way to pronounce them different languages by humans.

# Run it locally
This project was bootstraped using `create-react-app`. In order to run it you need to have a working `node` environment with `yarn` or `npm`.
```bash
yarn && yarn start
# or
npm install && npm run start
```
That's it, this will install all the required dependencies and start a development server in port `3000`.

# Contribute

Do you want to add your own language? It's easy, open a PR with the following changes:

1. Create a copy of `/client/src/locales/template.json` and rename it to the language code you want to add .i.e. `ru.json`, `pt.json` ...
2. Edit the new file and add the `name` of the language and the emoji `flag` if available. Add your translations for all the symbols. If a symbol has more than one translation add different entries in the array of values. Check other languages such as English for examples.

```json
{
  "name": "Language name in that language",
  "flag": "🏁",
  "symbols": {
    "symbol": ["prefered translation", "other translation for the same symbol"]
  }
}
```

3. Import the new file in `/client/src/locales/index.js` and add it to the default export.

```js
import en from "./en.json";
// ...
import language_code from "./language_code.json";

export default {
  en
  // ...
  language_code
};
```

4. Add yourself to the contributors list in the Contributors section down below

# Contributors

Translations brought to you by:

- [Helios Aliaga](https://github.com/heliosam) - Spanish / English
- [Sarah Seitz](https://github.com/SarahNox) - German
- [Aaron Ciaghi](https://github.com/aaronsama) - Italian
