import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Torus from '../Torus'

export default function Scene() {
    return (
        <Canvas>
            <Torus/>
            <directionalLight intensity={10} position={[0, 2, 3]} color={"blue"} />
            <Environment preset="city" />
        </Canvas>
    )
}