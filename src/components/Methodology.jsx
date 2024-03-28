import { useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as THREE from 'three';

function Methodology() {

    const mountRef = useRef(null);

    function getClipHeight(width) {
        return 350 * Math.min(Math.max((4 - Math.round(width / 350)), 1), 3);
    }

    const animatedObjects = [

    ]

    useEffect(() => {

        if (mountRef.current == null) {
            return;
        }
        const objects = [
            new THREE.Object3D(),
            new THREE.Object3D(),
            new THREE.Object3D(),
        ];

        // Create a scene
        const scene = new THREE.Scene();
        scene.background = null; // Set the background to null for transparency

        scene.add(...objects);

        // Add an ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 15);
        scene.add(ambientLight);

        // Add a point light
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(2, 2, 2);
        //scene.add(pointLight);

        const brandGreen = new THREE.MeshPhongMaterial({
            color: 0x9CF6B6, // Red color
            emissive: new THREE.Color(0x9CF6B6),
            emissiveIntensity: .5,
        });

        const brandWhite = new THREE.MeshPhongMaterial({
            color: new THREE.Color(0xffffff),
            emissive: new THREE.Color(0x9CF6B6),
            emissiveIntensity: .2,
        });

        // Load the glTF models
        const loader = new GLTFLoader();
        const loadModel = (path, index) => {
            loader.load(
                path,
                (gltf) => {

                    gltf.scene.traverse(function (child) {
                        if (child.isMesh) {
                            child.material = brandGreen;
                        }
                    });
                    const model = gltf.scene;
                    model.rotateX(Math.PI / 2);
                    model.scale.set(0.6, 0.6, 0.6);
                    objects[index].add(model); // Store the model in the objects array
                    //scene.add(model); // Add the model to the scene
                    handleResize();

                    console.log("model loaded from path: ", path);

                },
                undefined,
                (error) => {
                    console.error('Error loading glTF model:', error);
                }
            );
        };

        // Load models
        loadModel('/models/genre.glb', 0)
        loadModel('/models/design.glb', 1);
        loadModel('/models/persona.glb', 2);

        const { width } = mountRef.current.getBoundingClientRect();
        const height = getClipHeight(width);

        const aspect = width / height;

        var frustumSize;

        const temp = Math.round(width / 350)
        switch (temp) {
            case 1: frustumSize = 4; break;
            case 2: frustumSize = 3; break;
            default: frustumSize = 1.5; break;
        }

        const camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / -2,
            1,
            20
        );
        camera.position.set(0, 0, 4);
        //camera.lookAt(scene.position);

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const updateObjectsAndFrustrum = (width) => {
            const temp = Math.round(width / 350)
            switch (temp) {
                case 1: frustumSize = 4.4; break;
                case 2: frustumSize = 3; break;
                default: frustumSize = 1.5; break;
            }

            const gap = 1.4;

            objects.forEach((obj, index) => {

                if (temp == 1) {
                    obj.position.x = 0;
                    obj.position.y = (index - 1) * gap;
                } else if (temp == 2) {

                    if (index < 2) {
                        obj.position.x = (index - .5) * gap;
                        obj.position.y = .5 * gap;
                    } else {
                        obj.position.x = 0;
                        obj.position.y = -.5 * gap;
                    }

                } else {
                    obj.position.x = (index - 1) * gap;
                    obj.position.y = 0;
                }
            })
        }

        updateObjectsAndFrustrum(width);

        const clock = new THREE.Clock();

        // Animation loop
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            requestAnimationFrame(animate);
            objects.forEach((obj, index) => {

            })
            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            const { width } = mountRef.current.getBoundingClientRect();
            const height = getClipHeight(width);

            updateObjectsAndFrustrum(width);

            camera.left = frustumSize * (width / height) / -2;
            camera.right = frustumSize * (width / height) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = frustumSize / -2;
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
            <h1 className='text-center p-2'>Our methology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h1>
            <div ref={mountRef} className='border-0' />
            <h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline'>WORKSHEET</span> to see how your content matches up!</h1>
        </div>
    );
}

export default Methodology;