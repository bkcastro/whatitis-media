import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useAnimations, Text, Stats } from '@react-three/drei';

import * as THREE from 'three';

import Design from './Design';
import Genre from './Genre';
import Persona from './Persona'

// Function to calculate the angle between two quaternions
const calculateAngleBetweenQuaternions = (q1, q2) => {
    // Ensure the quaternions are normalized

    const A = new THREE.Quaternion();
    A.copy(q1);
    A.normalize();

    const B = new THREE.Quaternion();
    B.copy(q2);
    B.normalize();

    // Calculate the dot product
    const dot = A.dot(B);

    // Clamp the dot product to avoid precision errors leading to NaN in acos
    const clampedDot = Math.max(-1.0, Math.min(1.0, dot));

    // Calculate the angle between the quaternions
    const angle = 2 * Math.acos(clampedDot);

    // Convert radians to degrees
    return angle * (180 / Math.PI);
};

function ResettableOrbitControls() {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
    const initialPosition = useRef(new THREE.Vector3());
    const initialQuaternion = useRef(new THREE.Quaternion());
    const active = useRef(false);

    useEffect(() => {
        initialPosition.current.copy(camera.position);
        initialQuaternion.current.copy(camera.quaternion);
    }, [camera]);

    useEffect(() => {
        const controls = controlsRef.current;

        const resetCamera = () => {
            // I want the animtion to be relative to the distance between the two Quaternion. I think the most direct method is to get teh anllge between the two. 
            const angleBetween = calculateAngleBetweenQuaternions(initialQuaternion.current, camera.quaternion);

            console.log("Distane between quaternions ", angleBetween)
            const duration = 130 * angleBetween; // Time in ms
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const t = elapsed / duration;
                const temp = calculateAngleBetweenQuaternions(initialQuaternion.current, camera.quaternion);

                console.log(temp);
                if (t < 1 & temp > 0.01) {
                    camera.position.lerp(initialPosition.current, t);
                    camera.quaternion.slerp(initialQuaternion.current, t);
                    requestAnimationFrame(animate);
                } else {
                    camera.position.copy(initialPosition.current);
                    camera.quaternion.copy(initialQuaternion.current);
                }
            };

            animate();
        };

        const onStart = () => {
            console.log("onstart call")
            active.current = true;
        }

        const onEnd = () => {
            active.current = false;
            resetCamera();
        };

        controls.addEventListener('end', onEnd);
        controls.addEventListener('start', onStart);


        return () => {
            controls.removeEventListener('end', onEnd);
        };
    }, [camera, gl]);

    return <OrbitControls ref={controlsRef} enableZoom={false} />;
}

function Methodology() {

    return (
        <div className="rounded-md flex flex-wrap justify-center gap-4 p-2 lg:p-4"  >
            <div className='w-[250px] h-[250px] sm:w-[275px] sm:h-[275px]  md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] hover:cursor-pointer'>
                <Canvas>
                    <ambientLight color={0xffffff} intensity={1.8} />
                    <pointLight color={0xffffff} position={[1, 2, 1]} />
                    <Genre />
                    <Text
                        scale={[.9, .9, .9]}
                        color={0xffffff} // default
                        anchorX="center" // default
                        anchorY="middle" // default
                        position={[0, -2.3, 1]}
                        fontWeight={500}
                    >{`genre`}
                        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={300} />
                    </Text>
                    <ResettableOrbitControls />
                </Canvas>
            </div>
            <div className='w-[250px] h-[250px] sm:w-[275px] sm:h-[275px]  md:w-[300px] md:h-[300px]  lg:w-[350px] lg:h-[350px] hover:cursor-pointer'>
                <Canvas>
                    <ambientLight color={0xffffff} intensity={1.8} />
                    <pointLight color={0xffffff} position={[-1, -1, 1]} />
                    <Design />
                    <Text
                        scale={[.9, .9, .9]}
                        color={0xffffff} // default
                        anchorX="center" // default
                        anchorY="middle" // default
                        position={[0, -2.3, 1]}
                        fontWeight={500}
                    >{`design`}
                        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={300} />
                    </Text>
                    <ResettableOrbitControls />
                </Canvas>
            </div>
            <div className='w-[250px] h-[250px] sm:w-[275px] sm:h-[275px]  md:w-[300px] md:h-[300px]  lg:w-[350px] lg:h-[350px] hover:cursor-pointer'>
                <Canvas>
                    <ambientLight color={0xffffff} intensity={1.8} />
                    <pointLight color={0xffffff} position={[1, 0, 1]} />
                    <Persona />
                    <Text
                        fontStyle='bold'
                        fontSize={1}
                        scale={[.9, .9, .9]}
                        color={0xffffff} // default
                        anchorX="center" // def
                        anchorY="middle" // default
                        position={[0, -2.3, 1]}
                        fontWeight={500}
                    >{`persona`}
                        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={300} />
                    </Text>
                    <ResettableOrbitControls />
                </Canvas>
            </div>
        </div>
    );
}

export default Methodology;