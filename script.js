// creating a scene
let scene = new THREE.Scene();
// creating a camera
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100);
// creating a renderer
camera.position.z = 5
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: "red"});
let mesh = new THREE.Mesh(box, material);

// ye position ke example hai
      // mesh.position.z = 1
     // mesh.position.x = 2
// ye rotation ke example hai
     //    mesh.rotation.x = 2     
     //    mesh.rotation.y = 2
    //   mesh.rotation.z = 2
// ye scalling ke example hai
    //   mesh.scale.x = 2
    //   mesh.scale.y = 2
      // mesh.scale.z = 4
// pai kaise work karta hai
    //  mesh.rotation.x = Math.PI / 2
    //  mesh.rotation.y = Math.PI / 4


scene.add(mesh)
const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock()
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera)
    mesh.rotation.y = clock.getElapsedTime() * 2;
}
animate()