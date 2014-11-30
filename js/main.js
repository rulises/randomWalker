var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );


var Walker = function () {
  this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
  this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  this.cube = new THREE.Mesh( geometry, material );

};


var walker1 = new Walker();

scene.add( walker1.cube );

camera.position.z = 5;

document.body.appendChild( renderer.domElement );


function render() {
  requestAnimationFrame( render );

  walker1.cube.rotation.x += 0.1;
  walker1.cube.rotation.y += 0.1;

  renderer.render( scene, camera );
}
render();
