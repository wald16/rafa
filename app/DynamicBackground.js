import { useEffect, useRef } from "react";
import * as THREE from "three";

const DynamicBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add Particles
        const particles = new THREE.BufferGeometry();
        const particleCount = 500;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10; // Spread particles randomly
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xff4444,
            size: 0.1,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const particleMesh = new THREE.Points(particles, particleMaterial);
        scene.add(particleMesh);

        // Add Gradient Plane
        const planeGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);
        const gradientMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 0.6);
        }
      `,
            transparent: true,
        });

        const gradientPlane = new THREE.Mesh(planeGeometry, gradientMaterial);
        gradientPlane.rotation.x = -Math.PI / 2;
        scene.add(gradientPlane);

        // Animate
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particleMesh.rotation.y += 0.002; // Rotate particles
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 pointer-events-none"></div>;
};

export default DynamicBackground;
