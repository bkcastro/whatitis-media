import { useRef,useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


function Model({ modelPath }) {
    const gltf = useLoader(GLTFLoader, modelPath);
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [initialRotation, setInitialRotation] = useState(new THREE.Euler());



    useEffect(() => {
        // Access the model once it's loaded
        if (gltf.scene) {
            const model = gltf.scene;

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
            setInitialRotation(model.rotation.clone());
        }
    }, [gltf]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            const { x, y } = state.mouse;
                
                ref.current.rotation.y = -x * Math.PI * (.1);
                ref.current.rotation.z = -y * Math.PI * (.1);
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}



function Methodology() {
    return (
        <div className="">
            <h1 className='text-center p-2'>Our methology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h1>
            <div className=" rounded-md flex flex-wrap justify-center gap-4 p-2"  >
                <Canvas className=' ' style={{ width: '350px', height: '350px'}}>
                    <ambientLight intensity={1.0} />
                    <pointLight position={[0, 1, 1]} />
                    <Model modelPath="/models/genre.glb" />
                </Canvas>
                <Canvas className='' style={{ width: '350px', height: '350px'}}>
                <ambientLight intensity={1.0} />
                    <pointLight position={[0, 1, 1]} />
                    <Model modelPath="/models/design.glb" />
                </Canvas>
                <Canvas className='' style={{ width: '350px', height: '350px'}}>
                <ambientLight intensity={1.0} />
                    <pointLight position={[0, 1, 1]} />
                    <Model modelPath="/models/persona.glb" />
                    <OrbitControls />
                </Canvas>
            </div>
            <h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline'>WORKSHEET</span> to see how your content matches up!</h1>
        </div>
    );
}

export default Methodology;