# Create a basic scene
### Scene
- Like a container
- We put objects, models, lights, etc. in it
- At some point we ask Three.js to render that scene
```javascript
const scene = new THREE.Scene()
```
### Objects and Mesh
Objects can be many things such as primitive geometries, imported models, particles, lights and etc. . Here we start with a simple red cube.
We need to create a Mesh, combination of a **geometry** (the shape) and a **material** (how it looks). We start with a ***BoxGeometry*** and a ***MeshBasicMaterial***. After we create a mesh we should add it to the scene.
### Camera
- Not visible
- Serve as point of view when doing a render
- Can have multiple and switch between them
- Different types
    - We are going to use ***PerspectiveCamera***
```javascript
PerspectiveCamera(fov: Number, aspect: Number, near: Number, far: Number)
```
Field of View (FOV) is the open, observable area a person can see through their eyes or via an optical device, such as a camera.

Aspect Ratio is width of the render divided by the height of the render.

### Render
Renderer:
- Render the scene from the camera point of view
- Result drawn into a canvas
- A canvas is a HTML element in which you can draw stuff
- Three.js will use WebGL to draw the render inside the canvas
- We can create canvas or we can let Three.js do it
    - Use `document.querySelector(...)` to retrieve the canvas we created in the HTML and store it in a `canvas` variable

For the firt render we should call `render(...)` method on the `renderer` with `scene` and the `camera` as paramaters.
```javascript
renderer.render(scene, camera)
```
Nothing visible! because the camera is inside the cube, so we need move the camera backward. To transform an object, we can use the following properties:
- `position`
    - This property is also an object with `x`, `y` and `z` properties. Three.js considers the forward/backward axis to be `z`.
    Move the camera backward before doing the render:
    
    ```javascript
    camera.position.z = 3
    ```
    <p align="center">
        <img src="https://github.com/arefehkompani/learning-threejs/blob/main/Images/01-addPositionZ.png" width="500" height="300">
    </p>
    
    - Add axis *x*
    <p align="center">
        <img src="https://github.com/arefehkompani/learning-threejs/blob/main/Images/01-addPositionX.png" width="500" height="300">
    </p>
- `rotating`
- `scale`

