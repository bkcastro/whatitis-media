import { useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as THREE from 'three';

function Methodology() {

    const mountRef = useRef(null);

    function getClipHeight(width) {
        return 350 * Math.min(Math.max((4 - Math.round(width / 350)), 1), 3);
    }

    useEffect(() => {

        if (mountRef.current == null) {
            return;
        }
        const objects = [];

        // Create a scene
        const scene = new THREE.Scene();
        scene.background = null; // Set the background to null for transparency

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

        const brandPurple = new THREE.MeshPhongMaterial({
            color: new THREE.Color(0x814D9F),
            emissive: new THREE.Color(0x814D9F),
            emissiveIntensity: .7,
        });

        let model = null;

        // Load the glTF model
        const loader = new GLTFLoader();
        loader.load(
            '/models/objectA.glb',
            (gltf) => {
                model = gltf.scene;

                model.rotateX(Math.PI / 2)

                model.children[0].material = brandPurple;
                model.children[1].material = brandGreen;
                model.children[2].material = brandGreen;
                model.children[3].material = brandGreen;

                model.scale.set(.5, .5, .5);

                objects[0].add(model.clone());
                objects[1].add(model.clone());
                objects[2].add(model.clone());

                //scene.add(model);
            },
            undefined,
            (error) => {
                console.error('Error loading glTF model:', error);
            }
        );

        const { width } = mountRef.current.getBoundingClientRect();
        const height = getClipHeight(width);

        const aspect = width / height;

        var frustumSize;

        const temp = Math.round(width / 350)
        switch (temp) {
            case 1: frustumSize = 4; break;
            case 2: frustumSize = 3; break;
            case 3: frustumSize = 1.5; break;
        }

        const camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / -2,
            1,
            10
        );
        camera.position.set(0, 0, 3);
        camera.lookAt(scene.position);

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.update();

        const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1), new THREE.MeshBasicMaterial({ color: "red" }));


        for (let i = 0; i < 3; i++) {
            const temp = new THREE.Object3D();
            objects.push(temp);
            scene.add(temp);
        }

        const updateObjectsAndFrustrum = (width) => {
            const temp = Math.round(width / 350)
            switch (temp) {
                case 1: frustumSize = 4; break;
                case 2: frustumSize = 3; break;
                case 3: frustumSize = 1.5; break;
            }

            const gap = 1.3;

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
            controls.update();
            objects.forEach((obj) => {
                //obj.rotation.x =  Math.sin(elapsedTime * 0.1) * 1;
                //obj.rotation.y = Math.sin(elapsedTime * 0.1) * 1.;
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