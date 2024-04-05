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

function Genre() {
    const gltf = useLoader(GLTFLoader, "/models/genre.glb");
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [initialRotation, setInitialRotation] = useState(new THREE.Euler());
    const { actions } = useAnimations(gltf.animations, ref);


    useEffect(() => {
        // Access the model once it's loaded
        if (gltf.scene) {
            const model = gltf.scene;

            gltf.scene.traverse(child => {
                if (child.name == "1" | child.name == "2" | child.name == "3") {
                    child.material = glassMaterial;
                } else {
                    child.material = brandGreenMaterial;
                }

                child.material.needsUpdate = true;
            });

            model.scale.set(3, 3, 3);
            model.position.y = .6
            setInitialRotation(model.rotation.clone());
        }

        // Play all animations
        Object.values(actions).forEach(action => action.play());

    }, [gltf, actions]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            const { x, y } = state.mouse;

            //ref.current.rotation.y
            //ref.current.rotation.z = -y * Math.PI * (.1);

            const time = state.clock.getElapsedTime();
            const radius = .8 // Radius of the circle
            const speed = .4; // Speed of rotation


            // Find and rotate the child named 'a' around a radius
            const childA = ref.current.getObjectByName('1');
            if (childA) {
                childA.position.x = Math.cos(time * speed) * radius;
                childA.position.y = Math.sin(time * speed) * radius;
            }

            const childB = ref.current.getObjectByName('2');
            if (childB) {
                childB.position.x = -Math.cos(time * speed * 4 / 3) * .5;
                childB.position.y = Math.sin(time * speed * 4 / 3) * .5;
                //childB.lookAt(-1, -1, 1);
            }

            const childC = ref.current.getObjectByName('3');
            if (childC) {
                childC.rotation.z = time;
            }


        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}

export default Genre;