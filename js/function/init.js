function init() {

    //Initialize Renderer
    renderer = new THREE.WebGLRenderer({antialias:false});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    
    //Initialize Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, .1, 500);
    //camera.rotation.x = 20/180*Math.PI;
    camera.position.x = 0;
    camera.position.y = 12;
    camera.position.z = 20;

    //Initialize Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //Initialize Control
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Initialize Lights
    load_light();

    //Initialize Objects    
    var loader = new THREE.GLTFLoader();
    loader.load("object/Protein Model Final.gltf", function(gltf) {
        m = gltf.scene.children[0];
        scene.add(m);
        animate();
    });
    
    //Initialize Listeners

    resize();
}