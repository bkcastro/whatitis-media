import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';

import * as THREE from 'three';

const brandGreenMaterial = new THREE.MeshStandardMaterial({
    color: 0x9CF6B6, // Red color
    metalness: 0.2,
    roughness: 0.2
});

// Vertex shader
const vertexShader = `
  uniform vec3 color; 
  uniform float time; 
  varying vec3 vPosition;
  varying vec3 vColor;

  void main() {
    vPosition = position;
    vColor = color;
    vec3 transformedPosition = position;
    float timeFactorA = 0.5 + 0.5 * sin(time); 
    float timeFactorB = 0.5 + 0.3 * cos(time);
    float timeFactorC = 0.2 + 0.6 * sin(time);

    if (position.y > 0.0) {
        transformedPosition.y = mix(position.y,(.9*position.y)+position.y, timeFactorA);
    } else {
        if (position.x > 0.0) {
            // right side 
            transformedPosition.x = mix(position.x,(.9*position.x)+position.x, timeFactorB);
            transformedPosition.y = mix(position.y,(.9*position.y)+position.y, timeFactorB);
        } else {
            // left side 
            transformedPosition.x = mix(position.x,(.9*position.x)+position.x, timeFactorC);
            transformedPosition.y = mix(position.y,(.9*position.y)+position.y, timeFactorC);
        }
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);
  }
`;

// Fragment shader
const fragmentShader = `
  varying vec3 vPosition;
  varying vec3 vColor;

  void main() {
    // Simple color transformation based on position
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

const innerTriangleMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 }, 
        current: {value: 1.0},
        next: {value: 1.0},
        color: {value: new THREE.Color("white")}
    },
    vertexShader: vertexShader, 
    fragmentShader: fragmentShader,
})


function Persona() {
    const gltf = useLoader(GLTFLoader, "/models/persona.glb");
    const ref = useRef();
    const { actions } = useAnimations(gltf.animations, ref);

    useEffect(() => {
        // Access the model once it's loaded
        if (gltf.scene) {
            const model = gltf.scene;


            gltf.scene.traverse(child => {
                if (child.isMesh) {
                    if (child.name == "b") {
                        child.material = innerTriangleMaterial;
                    } else {
                        child.material = brandGreenMaterial;
                    }
                }
            });

            model.scale.set(3.5, 3.5, 3.5);
            //model.position.y = -.5;
        }

    }, [gltf, actions]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            innerTriangleMaterial.uniforms.time.value = state.clock.getElapsedTime(); 
        }
    });

    return <primitive object={gltf.scene} ref={ref} />;
}

export default Persona;