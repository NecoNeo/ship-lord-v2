import { useEffect, useRef } from 'react';

import * as THREE from 'three';

export default function ShipDesign() {
  const canvasContainerEl = useRef<HTMLDivElement | null>(null);
  const pageInited = useRef(false);
  useEffect(() => {
    if (pageInited.current === false) {
      if (!canvasContainerEl.current) return;
      pageInited.current = true;
      console.log('ship design update');
      console.log(canvasContainerEl.current);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
      renderer.setSize(500, 500);
      canvasContainerEl.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        renderer.render(scene, camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }
      renderer.setAnimationLoop(animate);
    }
  }, []);

  return (
    <div className="p-5 border border-amber-600 bg-green-300">
      <div>ShipDesign</div>
      <div
        className="border border-gray-600 bg-white"
        style={{ width: 500, height: 500 }}
        ref={canvasContainerEl}
      ></div>
    </div>
  );
}
