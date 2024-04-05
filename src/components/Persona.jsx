import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations, Text, Stats } from '@react-three/drei';

import * as THREE from 'three';

const brandGreenMaterial = new THREE.MeshStandardMaterial({
    color: 0x9CF6B6, // Red color
    metalness: 0.2,
    roughness: 0.2
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xffffff),
    emissive: new THREE.Color(0xffffff),
    roughness: 0.3,
    metalness: 0.3,
    thickness: 0.1,
    side: 0,
});

function Persona() {
    const gltf = useLoader(GLTFLoader, "/models/persona.glb");
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
                    if (child.name == "b") {
                        child.material = glassMaterial;
                    } else {
                        child.material = brandGreenMaterial;
                    }

                }
            });

            //console.log(ref);

            const innerTrianlge = gltf.scene.getObjectByName('b');
            const vertices = innerTrianlge.geometry.attributes.position.array;
            const lerpTo = [vertices.length];

            const edgeA = [];
            const edgeB = [];
            const edgeC = [];

            const A = new THREE.Vector3(0);
            const B = new THREE.Vector3(0);
            const C = new THREE.Vector3(0);

            for (let i = 0; i < vertices.length / 3; i++) {
                const x = vertices[(3 * i) + 0];
                const y = vertices[(3 * i) + 1];
                const z = vertices[(3 * i) + 2];


                if (y > 0) {
                    edgeA.push(new THREE.Vector3(x, y, z))

                    //vertices[(3 * i) + 1] = y * 1.9;
                } else {
                    if (x > 0) {
                        edgeB.push(new THREE.Vector3(x, y, z))

                        //vertices[(3 * i) + 0] = x * 1.9;
                        //vertices[(3 * i) + 1] = y * 1.9;
                    } else {
                        edgeC.push(new THREE.Vector3(x, y, z))
                        // vertices[(3 * i) + 0] = x * 1.9;
                        // vertices[(3 * i) + 1] = y * 1.9;
                    }
                }
            }

            console.log(edgeA, edgeB, edgeC);
            model.scale.set(3.5, 3.5, 3.5);
            //model.position.y = -.5;
            setInitialRotation(model.rotation.clone());
        }

    }, [gltf, actions]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            const { x, y } = state.mouse;

            const time = state.clock.getElapsedTime();
            const speed = .2; // Speed of rotation

            // Find and rotate the child named 'a' around a radius
            const childA = ref.current.getObjectByName('a');
            if (childA) {
                //childA.rotation.z = time * speed;
            }

            const childB = ref.current.getObjectByName('b');
            if (childB) {
                //childB.rotation.y = time * speed * 2;
            }
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}

export default Persona;