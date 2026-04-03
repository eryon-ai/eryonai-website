'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Professional geometric particles — use blue/cyan tones on dark bg
    const count = 1200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const palette = [
      new THREE.Color(0x0066ff),
      new THREE.Color(0x00b4d8),
      new THREE.Color(0x6366f1),
      new THREE.Color(0x38bdf8),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
      const c = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Elegant ring
    const ringGeo = new THREE.TorusGeometry(2.5, 0.012, 12, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.12 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.8, 0.008, 12, 120),
      new THREE.MeshBasicMaterial({ color: 0x00b4d8, transparent: true, opacity: 0.08 })
    );
    ring2.rotation.x = -Math.PI / 5;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMouse);

    let t = 0, animId: number;
    const tick = () => {
      animId = requestAnimationFrame(tick);
      t += 0.004;
      particles.rotation.y = t * 0.06 + mouseX * 0.12;
      particles.rotation.x = t * 0.025 + mouseY * 0.06;
      ring.rotation.z = t * 0.2;
      ring2.rotation.z = -t * 0.15;
      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 0.25 - camera.position.y) * 0.04;
      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      geo.dispose(); mat.dispose(); renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
