"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function createStarShape(outerRadius: number, innerRadius: number) {
  const shape = new THREE.Shape();
  const points = 5;

  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    // +PI/2 so the first outer point sits straight up (+Y)
    const angle = (i * Math.PI) / points + Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }

  shape.closePath();
  return shape;
}

interface SpinningStarProps {
  size?: number;
}

export default function SpinningStar({ size = 280 }: SpinningStarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    if (!container) return;

    const width = size;
    const height = size;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(2, 3, 2);
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
    fillLight.position.set(-2, 0, 1);
    scene.add(fillLight);

    const starShape = createStarShape(1.0, 0.4);
    const geometry = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.3,
      bevelEnabled: false,
    });
    geometry.center();

    const material = new THREE.MeshStandardMaterial({
      color: 0x0d0d0d,
      roughness: 0.3,
      metalness: 0.7,
    });

    const star = new THREE.Mesh(geometry, material);
    // Face the camera flat — no tilt on X or Z
    star.rotation.x = 0;
    star.rotation.z = 0;
    scene.add(star);

    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      star.rotation.y += 0.006;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const nextWidth = container.clientWidth || size;
      const nextHeight = container.clientHeight || size;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mounted, size]);

  return (
    <div
      ref={containerRef}
      className="spinning-star"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
