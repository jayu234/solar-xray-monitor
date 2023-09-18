// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import { ShaderMaterial } from 'three';

// const fragmentShader = document.getElementById('fragmentShader').textContent; // Replace with the actual path
// const vertexShader = document.getElementById('vertexShader').textContent; // Replace with the actual path


// export default function TheSun(props) {
//   const { nodes } = useGLTF('/The_Sun-processed-transformed.glb')

//   const materialRef = useRef();

//   useFrame(({ clock }) => {
//     if (materialRef.current) {
//       materialRef.current.uniforms.time.value = clock.getElapsedTime();
//     }
//   });
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.pSphere11.geometry}>
//         <shaderMaterial
//           ref={materialRef}
//           args={[{ vertexShader, fragmentShader }]}
//           uniforms={{ time: { value: 0 } }} // Pass any additional uniforms needed in the shader
//         />
//       </mesh>
//     </group>
//   )
// }

// useGLTF.preload('/The_Sun-processed-transformed.glb')

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TheSun(props) {
  const { nodes, materials } = useGLTF('/The_Sun-processed-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pSphere11.geometry} material={nodes.pSphere11.material} scale={0.30} />
    </group>
  )
}

useGLTF.preload('/The_Sun-processed-transformed.glb')