# Dev slang 💬

Visit our webpage https://devslang.netlify.com

# What is all this about?

As a software developer, when you are working with machines, you don't have to talk to them (normally). However there are times when you need to talk to a human colleague about the code you just created, it is then when sometimes it becomes difficult or confusing how to pronounce symbols such as `[`, `;`, `~`... This repo will try to collect all these characters and symbols for humans and the proper way to pronounce them different languages.

# Contribute

Do you want to add your own language? It's easy, follow these steps:

1. Create a copy of `/client/src/locales/template.json` and rename it to the language code you want to add .i.e. `ru.json`, `pt.json` ...
2. Add your translations in that new file. If a symbol has more than one translation add different entries in the array of values. Check other languages such as English for examples.
```json
{
  "symbol": ["translation", "other translation for the same symbol"]
}
```
3. Import the new file in `/client/src/locales/index.js` and add it to the default export adding the `name` of the language in that language, the emoji `flag` if available, and the `symbols` being the file you imported before. Check the other languages for examples.

4. Add yourself to the Contributors section down below

```js
import en from "./en.json";
// ... 
import yourCode from "./yourCode.json";

export default {
  en: { name: "English", flag: "🇬🇧", symbols: en },
  // ... 
  yourCode: { name: "Translation", flag: "🏁", symbols: yourCode }
};
```

# Contributors
Translations brought to you by:

- [Helios Aliaga](https://github.com/heliosam) - Spanish / English
- [Sarah Seitz](https://github.com/SarahNox) - German
- [Aaron Ciaghi](https://github.com/aaronsama) - Italian