- Loading Three.js with a `<script>` has limitations
- Doesn't include some of the classes
- We need those classes
- We need to run a server to emulate a website and for security reasons
We need:
- The bundler apply potential modifications and output a web-friendly "bundle"
- Can do more like local server, manage dependencies, improve compatibility, add modules support, optimize files, deploy, etc.

### Webpack
- Most popular
- Handle most of our needs
- Good <a href="https://webpack.js.org/concepts/" target="_blank">documentation</a>
- Good community
- Well maintained

#### Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

- The working files are located in `/src/`
- `script.js` is the root file and it will be added to the HTML automatically
- The `style.css` file is loaded from `script.js` with `import`
- The page automatically reloads as you save
- Making a syntax mistake will usually result in an error visible on the web page
- Some mistakes might break the auto-reload and you need to do it manually
- You can put "static files" in the `static/` folder