# Textures

## Setup
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
## Texture
Textures are images that will cover the surface of the geometries. Many types with Many different effects.

### Color 
* Most simple one
* Applied on the geometry

### Alpha 
* Grayscale image
* White visible
* Black not visible

### Height (Or Displacement) 
* Grayscale image
* Move the vertices to create some relief
* Need enough subdivision

### Normal 
* Add details
* Doesn't need subdivision
* The vertices won't move
* Lure the light about the face orientation
* Better performances than adding a height texture with a lot of subdivision

### Ambient Occlusion 
* Grayscale image
* Add fake shadows in crevices
* Not physically accurate
* Helps to create contrast and see details

### Metalness
* Grayscale image
* White is metalic
* Black is non-metalic
* Mostly for reflection

### Roughness
* Grayscale image
* In duo with the metalness
* White is rough
* Black is smooth
* Mostly for light dissipation

There are many other types but these are the main ones and we will focus on them. (You can see images in static folder)
<br>
Those textures (especially the metalness and the roughness) follow the PBR principles:
- Physically Based Rendering
- Many technics that tend to follow real-life directions to get realistic results
- Becoming the standard for realistic renders
- Many software, engines, and libraries are using it

learn more:
- [Basic Theory of Physically Based Rendering](https://marmoset.co/posts/basic-theory-of-physically-based-rendering)
- [Physically-Based Rendering, And You Can Too!](https://marmoset.co/posts/physically-based-rendering-and-you-can-too)

## Using textures
Create an `Image` instance, listen to the `load` event, and change its `src`

```javascript
const image = new Image()
image.onLoad = () => {
    console.log('Image loaded')
}
image.src = '/textures/door/color.jpg'
```
We cannot use that image directly and we need transform it into a ***Texture***.
Create a `texture` variable with the **Texture** class.
```javascript
image.onLoad = () => {
    const texture = new THREE.Texture(image)
}
```
We need to use that `texture` in the `material`. Unfortunately, the `texture` variable has been declared in a function and we can not access it outside of this function.
We can create the texture outside of the function and update it once the image is loaded with `needsUpdate = true`.
```javascript
const image = new Image()
const texture = new THREE.Texture(image)
image.onLoad = () => {
    texture.needsUpdate = true
}
image.src = '/textures/door/color.jpg'
```
Replace the `color` property by `map` and use the `texture`.
```javascript
const material = new THREE.MeshBasicMaterial({ map: texture })
```

### TextureLoader
Instantiate a variable using the **TextureLoader** class and use its `.load(...)` method to create a texture. And one **TextureLoader** can load multiple textures.
```javascript
const textureLoader = new THREE.TextureLoader()
const colorTexture = textureLoader.load('/texture/door/color.jpg')
const alphaTexture = textureLoader.load('/texture/door/alpha.jpg')
```
We can send 3 functions after the path:
- `load` - when the image loaded successfully
- `progress` - when the loading is progressing
- `error` - if something went wrong

```javascript
const texture = textureLoader.load(
    '/texture/door/color.jpg',
    () => {
        console.log('load')
    },
    () => {
        console.log('progress')
    },
    () => {
        console.log('error')
    }
)
```
### LoadingManager
We can use a **LoadingManager** to mutualize the events. It's useful if we want to know the global loading progress or be informed when everything is loaded.
Create an instance of the **LoadingManager** class and pass it to the **TextureLoader**.
```javascript
const loadingManager = new THREE LoadingManager()
const textureLoader = new THREE.TextureLoader(loadingManager)
```
Listen to the events by replacing the following properties by your own functions.
```javascript
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('onStart');
}
loadingManager.onLoad = () => {
    console.log('onLoad');
}
loadingManager.onProgress = () => {
    console.log('onProgress');
}
loadingManager.onError = () => {
    console.log('onError');
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
```
We can replace the **BoxGeometry** bu other geometries.
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Or
const geometry = new THREE.SphereBufferGeometry(1, 32, 32)

// Or
const geometry = new THREE.ConeBufferGeometry(1, 1, 32)
```
The textures is being stretched or squeezed in different ways to cover the geometry. This is called ***UV unwrapping***  and it's like unwrapping an origami or a candy wrap to make it flat. Each vertex will have a 2D coordinate on a flat plane.

