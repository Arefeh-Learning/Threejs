# Create a basic scene
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
- `rotating`
- `scale`

