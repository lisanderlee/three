'use client'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color='blue' />
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}
