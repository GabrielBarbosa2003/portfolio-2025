import './canva.css'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'

export default function Torus() {
    const torus = useRef(null)

    const materialProps = useControls({

        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

        roughness: { value: 0, min: 0, max: 1, step: 0.1 },

        transmission: { value: 1, min: 0, max: 1, step: 0.1 },

        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

        chromaticAberration: { value: 0.02, min: 0, max: 1 },

        backside: { value: true },

    })

    useFrame(() =>{
        torus.current.rotation.x += 0.01
    })



    return (

        <group>
            <mesh ref={torus} rotation={[-1, 10, 0]} position={[0, -0.3, -0.5]}>
                <torusGeometry args={[2, 0.6, 16, 100]} />
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>

            {/* <OrbitControls /> */}
        </group>



    )
}

