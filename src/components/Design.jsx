import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useAnimations, Text, Stats } from '@react-three/drei';

import * as THREE from 'three';

const brandGreenMaterial = new THREE.MeshStandardMaterial({
    color: 0x9CF6B6, // Red color
    metalness: 0.2,
    roughness: 0.2
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xffffff),
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 100,
    side: 0,
})

function Design() {
    const gltf = useLoader(GLTFLoader, "/models/design.glb");
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [initialRotation, setInitialRotation] = useState(new THREE.Euler());
    const { actions } = useAnimations(gltf.animations, ref);


    useEffect(() => {
        // Access the model once it's loaded
        if (gltf.scene) {
            const model = gltf.scene;


            gltf.scene.traverse(child => {
                if (child.isMesh) {
                    if (child.name == "frame") {
                        child.material = brandGreenMaterial;
                    } else {
                        child.material = glassMaterial;
                    }

                }
            });

            //console.log(ref);

            model.scale.set(2.7, 2.7, 2.7);
            model.position.y = .5;
            setInitialRotation(model.rotation.clone());
        }

    }, [gltf, actions]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            const { x, y } = state.mouse;

            //console.log(x, y)

            // ref.current.rotation.y = -x * Math.PI * (.1);
            // ref.current.rotation.z = -y * Math.PI * (.1);
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}


export default Design; 