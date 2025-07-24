import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Torus from '../Torus'

export default function Scene() {
    const isMobile = window.innerWidth <= 768;
    return (

        <Canvas dpr={[1, 1.5]}>
            <Torus />
            <directionalLight intensity={10} position={[0, 2, 3]} color={"blue"} />
            {!isMobile && <Environment preset="city" />}
        </Canvas>
    )
}