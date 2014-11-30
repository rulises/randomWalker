var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

var walker1 = new Walker();

scene.add( walker1.cube );

camera.position.z = 5;

document.body.appendChild( renderer.domElement );


function render() {
  requestAnimationFrame( render );

  renderer.render( scene, camera );
}
render();
