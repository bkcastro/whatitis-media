import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useAnimations, Text, Stats } from '@react-three/drei';

import * as THREE from 'three';

import Design from './Design';
import Genre from './Genre';
import Persona from './Persona'

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
                    {/* <OrbitControls enableZoom={false} /> */}
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
                    {/* <OrbitControls enableZoom={false} /> */}
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
                    {/* <OrbitControls enableZoom={false} /> */}
                </Canvas>
            </div>
        </div>
    );
}

export default Methodology;