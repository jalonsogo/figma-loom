# Loom - Text Replacer Plugin

A simple Figma plugin that allows you to replace multiple text elements with lines from a text input.

![Loom icon](assets/loom.png)

## Features

- Select multiple text elements in Figma
- Paste or type multi-line text
- Each line replaces one text element in order
- Preserves original text formatting and fonts
- User-friendly interface with status feedback

## How it works

1. **Element 1** gets replaced with **Line 1**
2. **Element 2** gets replaced with **Line 2**
3. And so on...

## Installation & Setup

### 1. Install dependencies

```bash
cd figma-text-replacer
npm install
```

### 2. Build the plugin

```bash
npm run build
```

This will compile `code.ts` into `code.js` which Figma will use.

### 3. Load the plugin in Figma

1. Open Figma Desktop App
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select the `manifest.json` file from this folder
4. The plugin will now appear in your plugins menu

## Usage

1. **Select text elements**: Select multiple text layers in your Figma file
2. **Run the plugin**: Go to **Plugins** → **Development** → **Text Replacer**
3. **Enter your text**: Paste or type your text with one line per element
4. **Click Replace**: The plugin will replace each selected text element with the corresponding line

### Example

If you have 3 text elements selected and enter:
```
Hello World
Welcome to Figma
This is awesome
```

- The first text element becomes "Hello World"
- The second text element becomes "Welcome to Figma"
- The third text element becomes "This is awesome"

## Development

### Watch mode

To automatically rebuild when you make changes:

```bash
npm run watch
```

Then restart the plugin in Figma to see your changes.

### File structure

- `manifest.json` - Plugin configuration
- `code.ts` - Plugin logic (TypeScript)
- `code.js` - Compiled plugin code (generated)
- `ui.html` - Plugin user interface
- `package.json` - NPM dependencies
- `tsconfig.json` - TypeScript configuration

## Tips

- The plugin preserves the original font and styling of each text element
- If you have more text elements than lines, extra elements won't be changed
- If you have more lines than text elements, extra lines will be ignored
- Use Cmd/Ctrl + Enter to quickly trigger the replacement

## Troubleshooting

**Plugin doesn't appear in Figma:**
- Make sure you're using the Figma Desktop App (not browser)
- Check that you've built the plugin with `npm run build`
- Try re-importing the manifest.json

**"No text elements found" error:**
- Make sure you're selecting text layers, not frames or other objects
- You can select text layers directly or use the layers panel

**Font loading errors:**
- The plugin automatically loads fonts, but if you see errors, make sure the fonts are available in your Figma file

## License

MIT
