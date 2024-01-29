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
- [Basic Theory of Physicallu Based Rendering](https://marmoset.co/posts/basic-theory-of-physically-based-rendering)
- [Physically-Based Rendering, And You Can Too!](https://marmoset.co/posts/physically-based-rendering-and-you-can-too)



