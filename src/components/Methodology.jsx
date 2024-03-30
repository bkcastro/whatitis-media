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
    emissive: new THREE.Color(0x9CF6B6),
    emissiveIntensity: 0.2,
    roughness: 0.1,
    metalness: 0.3,
    thickness: 0.4,
    side: 0,
});


function Model({ modelPath }) {
    const gltf = useLoader(GLTFLoader, modelPath);
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

                }
            });

            //console.log(ref);

            model.scale.set(3, 3, 3);
            setInitialRotation(model.rotation.clone());
        }

        // Play all animations
        Object.values(actions).forEach(action => action.play());

    }, [gltf, actions]);

    // Update rotation on mouse hover
    useFrame((state) => {
        if (ref.current) {
            const { x, y } = state.mouse;

            //console.log(x, y)

            ref.current.rotation.y = -x * Math.PI * (.1);
            ref.current.rotation.z = -y * Math.PI * (.1);
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}

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
                if (child.name == "c" | child.name == "a" | child.name == "b") {
                    child.material = glassMaterial;
                } else {
                    child.material = brandGreenMaterial;
                }

                child.material.needsUpdate = true;
            });

            model.scale.set(3, 3, 3);
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
            const speed = .5; // Speed of rotation


            // Find and rotate the child named 'a' around a radius
            const childA = ref.current.getObjectByName('a');
            if (childA) {
                childA.position.x = Math.cos(time * speed) * radius;
                childA.position.y = Math.sin(time * speed) * radius;
                // Manually set the rotation to face the center (origin)
                const radians = Math.atan2(childA.position.z, childA.position.x) + Math.PI / 2;
                //childA.rotation.y = angle;
                //childA.rotation.y = -angle;
                //console.log((180 / Math.PI) * radians)

            }

            const childB = ref.current.getObjectByName('b');
            if (childB) {
                childB.position.x = -Math.cos(time * speed * 4 / 3) * .5;
                childB.position.y = Math.sin(time * speed * 4 / 3) * .5;
                //childB.lookAt(-1, -1, 1);
            }
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}

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

            model.scale.set(3.5, 3.5, 3.5);
            model.position.y = -.5;
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


            const time = state.clock.getElapsedTime();
            const speed = .2; // Speed of rotation


            // Find and rotate the child named 'a' around a radius
            const childA = ref.current.getObjectByName('a');
            if (childA) {
                //childA.rotation.z = time * speed;
            }

            const childB = ref.current.getObjectByName('b');
            if (childB) {
                childB.rotation.x = time * speed * 2;
                childB.rotation.y = time * speed * 2;
            }
        }
    });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}

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

            model.scale.set(3, 3, 3);
            //model.position.y = -.5;
            setInitialRotation(model.rotation.clone());
        }

    }, [gltf, actions]);

    // // Update rotation on mouse hover
    // useFrame((state) => {
    //     if (ref.current) {
    //         const { x, y } = state.mouse;

    //         //console.log(x, y)

    //         // ref.current.rotation.y = -x * Math.PI * (.1);
    //         // ref.current.rotation.z = -y * Math.PI * (.1);


    //         const time = state.clock.getElapsedTime();
    //         const speed = .2; // Speed of rotation


    //         // Find and rotate the child named 'a' around a radius
    //         const childA = ref.current.getObjectByName('a');
    //         if (childA) {
    //             //childA.rotation.z = time * speed;
    //         }

    //         const childB = ref.current.getObjectByName('b');
    //         if (childB) {
    //             childB.rotation.x = time * speed * 2;
    //             childB.rotation.y = time * speed * 2;
    //         }
    //     }
    // });

    return <primitive object={gltf.scene} ref={ref} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)} />;
}



function Methodology() {
    return (
        <div className="">
            <h1 className='text-center p-2'>Our methology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h1>
            <div className=" rounded-md flex flex-wrap justify-center gap-4 p-2"  >
                <Canvas className=' ' style={{ width: '350px', height: '350px' }}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[1, 2, 1]} />
                    <Text
                        scale={[1, 1, 1]}
                        color="white" // default
                        anchorX="center" // default
                        anchorY="middle" // default
                        position={[0, -1.5, 1]}
                    >genre</Text>
                    <Genre />
                    <OrbitControls />
                </Canvas>
                <Canvas className='' style={{ width: '350px', height: '350px' }}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[-1, -1, 1]} />
                    <Design />
                    <Text
                        scale={[1, 1, 1]}
                        color="white" // default
                        anchorX="center" // default
                        anchorY="middle" // default
                        position={[0, -1.5, 1]}
                    >design</Text>
                    <OrbitControls />
                </Canvas>
                <Canvas className='' style={{ width: '350px', height: '350px' }}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[1, 0, 1]} />
                    <Persona />
                    <Text
                        scale={[1, 1, 1]}
                        color="white" // default
                        anchorX="center" // default
                        anchorY="middle" // default
                        position={[0, -1.5, 1]}
                    >persona</Text>
                    <OrbitControls />
                </Canvas>
            </div>
            <h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline'>WORKSHEET</span> to see how your content matches up!</h1>
        </div>
    );
}

export default Methodology;