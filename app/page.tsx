// Full-Page Interactive Background with Rainbow Color Shift and Growing Shape Morphing on Cursor Movement
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const FullPageBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particleSystem: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (mountRef.current) {
        mountRef.current.innerHTML = ""; // Clear any existing content
        mountRef.current.appendChild(renderer.domElement);
      }

      const particleCount = 5000;
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        colors[i * 3] = Math.random(); // Red
        colors[i * 3 + 1] = Math.random(); // Green
        colors[i * 3 + 2] = Math.random(); // Blue

        sizes[i] = Math.random() * 0.5 + 0.1; // Random size
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);

      camera.position.z = 5;

      animate();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

      if (particleSystem) {
        particleSystem.rotation.x = normalizedY * 0.2;
        particleSystem.rotation.y = normalizedX * 0.2;

        const positions = particleSystem.geometry.attributes.position.array as Float32Array;
        const sizes = particleSystem.geometry.attributes.size.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
          const distance = Math.sqrt(
            Math.pow(positions[i], 2) +
            Math.pow(positions[i + 1], 2) +
            Math.pow(positions[i + 2], 2)
          );

          positions[i] += Math.sin(normalizedX * Math.PI * distance * 0.1) * 0.05;
          positions[i + 1] += Math.cos(normalizedY * Math.PI * distance * 0.1) * 0.05;
          positions[i + 2] += Math.sin((normalizedX + normalizedY) * Math.PI * distance * 0.1) * 0.05;

          sizes[i / 3] = Math.abs(Math.sin(normalizedX * distance * 0.1)) * 2.5 + 0.5; // Increase size
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.geometry.attributes.size.needsUpdate = true;

        const colors = particleSystem.geometry.attributes.color.array as Float32Array;
        for (let i = 0; i < colors.length; i += 3) {
          colors[i] = (Math.sin(normalizedX * Math.PI) + 1) / 2; // Red
          colors[i + 1] = (Math.sin(normalizedY * Math.PI) + 1) / 2; // Green
          colors[i + 2] = 1 - colors[i]; // Blue
        }
        particleSystem.geometry.attributes.color.needsUpdate = true;
      }
    };

    const animate = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (renderer && camera) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    init();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-auto"></div>;
};

const InfoSection = () => {
  return (
    <section className="relative z-10 px-8 py-20">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-lg p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-red-500 mb-4">¿Por qué Elegirnos?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Ofrecemos soluciones únicas y personalizadas que garantizan una experiencia memorable para tus clientes. Desde diseño interactivo hasta estrategias innovadoras, transformamos ideas en realidades impactantes.
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Experiencia en diseño interactivo</li>
          <li>Estrategias centradas en el cliente</li>
          <li>Innovación en cada proyecto</li>
        </ul>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="font-sans text-white relative overflow-hidden">
      {/* Full Page Background */}
      <FullPageBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold text-white drop-shadow-md"
          >
            Transforma tu Marca
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-4 text-xl font-light"
          >
            Soluciones dinámicas y creativas para tus necesidades publicitarias.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/services"
              className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-transform transform hover:scale-110"
            >
              Descubre Más
            </a>
            <a
              href="/contact"
              className="bg-gray-800 text-gray-300 font-bold py-3 px-8 rounded-lg hover:bg-gray-700 hover:text-white transition-transform transform hover:scale-110"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />

      {/* Call-to-Action Section */}
      <section className="relative py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-red-500 mb-6"
        >
          ¡Lleva tu Marca al Siguiente Nivel!
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          Contáctanos para crear estrategias que capturan la atención y generan resultados.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="/contact"
          className="inline-block bg-red-500 text-white font-bold py-4 px-10 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-transform"
        >
          Contáctanos Ahora
        </motion.a>
      </section>
    </div>
  );
}