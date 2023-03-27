import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Cursor
*/
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5 // give coordinate
    cursor.y = -(event.clientY / sizes.height - 0.5)
})

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)

var geo = new THREE.EdgesGeometry( mesh.geometry );
var mat = new THREE.LineBasicMaterial( { color: 0x000000 } );
var wireframe = new THREE.LineSegments( geo, mat );
mesh.add( wireframe );
scene.add(mesh)


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

window.addEventListener('dblclick', () => {
    // For all browser 
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } else if (canvas.webkitFullscreenElement) {
            canvas.webkitFullscreenElement()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.exitFullscreen()
        }
    }
    // For all browser except safari
    // if (!document.fullscreenElement) {
    //     canvas.requestFullscreen()
    // } else {
    //     document.exitFullscreen()
    // }
})
// Camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {
    // Clock
    const elapsedTime = clock.getElapsedTime()

    // Update controls when using damping
    controls.update()

    // Update objects
    // mesh.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()


 
