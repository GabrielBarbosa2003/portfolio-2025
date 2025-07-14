import './canva.css'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import { easing } from 'maath'

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}


export default function Torus() {
    const torus = useRef(null)

    const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

    // const materialProps = useControls({

    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    //     chromaticAberration: { value: 0.02, min: 0, max: 1 },

    //     backside: { value: true },
    //     hidden: {value:true}

    // })


    let cursor = {}
    cursor.x = 0
    cursor.y = 0

    useFrame((mouse, deltaTime) => {
        torus.current.rotation.x += 0.01

        //Camera 

        // cursor.x = mouse.pointer.x 
        // cursor.y = mouse.pointer.y 

        // const parallaxX = cursor.x * 20
        // const parallaxY = cursor.y * 20

        // mouse.camera.position.x = (parallaxX - mouse.camera.position.x) * 3 * deltaTime 
        // mouse.camera.position.y = (parallaxY - mouse.camera.position.y) * 3 * deltaTime 

    

    })

    const { viewport } = useThree()







    return (

        <group scale={viewport.width / 18}>
            <mesh ref={torus} rotation={[-1, 10, 0]} position={[0, 0.2, -0.5]}>
                <torusGeometry args={[2, 0.6, 16, 100]} />
                <MeshTransmissionMaterial  
                thickness={0.20}
                roughness={0}
                transmission={1.0}
                ior={1.2}
                chromaticAberration={0.02}
                backside={true}
                />
            </mesh>
            <CameraRig/>
            {/* <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={[0, 0, 5]}/> */}
        </group>



    )
}

