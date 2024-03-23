import { useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as THREE from 'three';

function Methodology() {

    const mountRef = useRef(null);

    useEffect(() => {

        if (mountRef.current == null) {
            return;
        }
        // Create a scene
        const scene = new THREE.Scene();
        scene.background = null; // Set the background to null for transparency

        // Add an ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 15);
        scene.add(ambientLight);

        // Add a point light
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(2, 2, 2);
        scene.add(pointLight);


        let model = null;

        // Load the glTF model
        const loader = new GLTFLoader();
        loader.load(
            '/models/objectA.glb',
            (gltf) => {
                model = gltf.scene;

                console.log(model);
                model.rotateX(Math.PI / 2)

                const brandGreen = new THREE.MeshPhongMaterial({
                    color: 0x9CF6B6, // Red color
                    emissive: new THREE.Color(0x9CF6B6),
                    emissiveIntensity: .5,
                });

                const brandPurple = new THREE.MeshPhongMaterial({
                    color: new THREE.Color(0x814D9F),
                    emissive: new THREE.Color(0x814D9F),
                    emissiveIntensity: .7,
                });


                model.children[0].material = brandPurple;
                model.children[1].material = brandGreen;
                model.children[2].material = brandGreen;
                model.children[3].material = brandGreen;

                scene.add(model);
            },
            undefined,
            (error) => {
                console.error('Error loading glTF model:', error);
            }
        );

        const { width, height } = mountRef.current.getBoundingClientRect();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        camera.position.z = 2;

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.update();

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            if (model) {
                model.children[0].rotation.x += 0.01;
                model.children[0].rotation.y += 0.01;
                model.children[0].rotation.z += 0.01;

                model.children[1].rotation.x += 0.001;
                model.children[1].rotation.y -= 0.001;

                model.children[2].rotation.x += 0.001;
                model.children[2].rotation.y -= 0.001;
                model.children[2].rotation.z -= 0.01;

                model.children[3].rotation.x += 0.001;
                model.children[3].rotation.y += 0.01;
                model.children[3].rotation.z += 0.01;
            }
            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            const { width, height } = mountRef.current.getBoundingClientRect();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        // Attach resize handler
        window.addEventListener('resize', handleResize);


        // Clean up on component unmount
        return () => {
            if (mountRef.current != null) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="">
            <h1 className='text-center p-2'>Our methology invloves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h1>
            <div ref={mountRef} className=' h-96' />
        </div>
    );
}

export default Methodology;