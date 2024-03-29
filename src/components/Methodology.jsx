import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


function Model({ modelPath }) {
    const gltf = useLoader(GLTFLoader, modelPath);
    const ref = useRef();


    useEffect(() => {
        // Access the model once it's loaded
        if (gltf.scene) {
            const model = gltf.scene;

            // Example: Log the model's children
            console.log(model.children);

            gltf.scene.traverse(child => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x9CF6B6, // Red color
                        metalness: 0.2,
                        roughness: 0.2
                    });
                }
            });

            model.scale.set(3, 3, 3);
            model.rotation.x = Math.PI / 2;

            // Add point light
            const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Color, intensity, distance
            pointLight.position.set(3, 3, 3);  // Adjust position as needed
            gltf.scene.add(pointLight);
        }
    }, [gltf]);

    return <primitive object={gltf.scene} ref={ref} />;
}



function Methodology() {
    return (
        <div className="">
            <h1 className='text-center p-2'>Our methology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h1>
            <div className="model-container bg-red-400 border-2 border-pink-400 rounded-md gird grid-cols-3" >
                <Canvas className='border-2 w-[200px]'>
                    <ambientLight intensity={1.0} />
                    <pointLight position={[0, 1, 1]} />
                    <Model modelPath="/models/genre.glb" />
                    <OrbitControls />
                </Canvas>
                <Canvas>
                    <ambientLight intensity={0.6} />
                    <pointLight position={[5, 5, 5]} />
                    <Model modelPath="/models/design.glb" />
                    <OrbitControls />
                </Canvas>
                <Canvas>
                    <Model modelPath="/models/persona.glb" />
                    <OrbitControls />
                </Canvas>
            </div>
            <h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline'>WORKSHEET</span> to see how your content matches up!</h1>
        </div>
    );
}

export default Methodology;