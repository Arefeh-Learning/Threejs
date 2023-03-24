import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 'red'
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0.7, -0.6, 1)

// Scale
mesh.scale.set(2, 0.5, 0.5)

// Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

scene.add(mesh)
// You can normalize its values
// mesh.position.normalize()
// console.log(mesh.position.length()) // log 1

// Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position)

// We can get the distance from another Vector3
// console.log(mesh.position.distanceTo(camera.position))

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


 
