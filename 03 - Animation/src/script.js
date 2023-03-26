import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

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
scene.add(mesh)

// Axes Helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio, 
//     1 * aspectRatio, 
//     1, 
//     -1, 
//     0.1, 
//     100
// )
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => {
    // Clock
    const elapsedTime = clock.getElapsedTime()
    
    // Update camera
    camera.position.x = Math.sin(cursor.x * 10) * 3
    camera.position.z = Math.cos(cursor.x * 10) * 3
    camera.lookAt(new THREE.Vector3()) // or mesh.position

    // Update objects
    // mesh.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()


 
