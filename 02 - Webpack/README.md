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

### Transform objects
There are 4 properties to transform objects:
- position
- scale
- rotation
- quaternion

All classes that inherit from the <a href="https://threejs.org/docs/#api/en/core/Object3D" target="_blank">Object3D</a> posses these properties, like ***PerspectiveCamera*** or ***Mesh***. These properties will be compiled in matrices but we don't need to understand matrices.
With `position` which has 3 properties: x, y and z. The direction of each axis is arbitrary. In Three.js, we consider:
- `x` axis is going to the right
- `y` axis is going upward
- `z` axis is going backward

The distance of 1 unit is arbitrary too. We should think of 1 according to what we are building (1 centimeter, 1 meter or 1 kilometer).
We can change all 3 values of x, y, and z at once by using the `set(...)` method:
```javascript
mesh.position.set(0.7, -0.5, 1)
```

### Axes Helper
Positioning things in space can be hard. One good solution is to use the ***AxesHelper*** to display a colored line for each axis.
```javascript
const axesHelper = new THREE.AxesHelper() // or THREE.AxesHelper(Number)
scene.add(axesHelper)
```
### Rotate Objects
With `rotation` or with `quaternion`. Updating one will automatically update the other.
`rotation` also has x, y and z properties but it's an **Euler**. When you change the x, y and z properties you can imagine putting a stick through your object's center in the axis's direction and then rotating that object on that stick. The value of these axes is expressed in radians. Half a rotation is something like 3.14159... but you can use `Math.PI`.

> **Warning**
> When you rotate on an axis, you might also rotate the other axis. The rotation goes by default in the x, y and z order you can get strange result like an axis not working anymore. This is called **gimbal lock**.

You can change this order by using the `reorder(...)` method. We should do this before changing the rotation.
```javascript
object.rotation.reorder('YXZ')
```
Object3D instances have a `lookAt(...)` method which rotates the object so that its `-z` faces the target you provided. The target must be a Vector3.
```javascript
camera.lookAt(new THREE.Vector3(0, -1, 0))
camera.lookAt(mesh.position)
```
### Quaternion
**Euler** is easy to understand but this axis order can be problematic. This is why most engines and 3D softwares use **Quaternion**. **Quaternion** also expresses a rotation, but in a more mathematical way.

### Group
You can put objects inside groups and use `position`, `rotation` (or `quaternion`) and `scale` on those groups. To do that, we use the **Group** class.
```javascript
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)
```

<p align="center">
        <img src="https://github.com/arefehkompani/learning-threejs/blob/main/Images/02-groupofCubes.png" width="500" height="300">
    </p>
