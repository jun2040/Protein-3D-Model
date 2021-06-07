function load_obj(gltf) {

    //Get Obj
    protein = gltf.scene.getObjectByName("Strand.038");

    //Add Obj
    scene.add(protein);

    animate();
}