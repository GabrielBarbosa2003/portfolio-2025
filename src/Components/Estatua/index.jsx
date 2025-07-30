import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Estatua() {
    const suzi = '/3d/estatua.gltf'
    const { nodes } = useGLTF(suzi)
    const matcapTexture = useTexture('/10.png')
        matcapTexture.flipY = false
      matcapTexture.colorSpace = THREE.SRGBColorSpace 

    return (
        <group>
            <mesh receiveShadow castShadow geometry={nodes.texture_pbr_v128.geometry} scale={[6,4,5]} rotation={[1.4, 0, 0]} position={[0, -0.5, 1.8]}>
                <meshMatcapMaterial matcap={matcapTexture}/>
            </mesh>
            <perspectiveCamera />
            
            {/* <OrbitControls /> */}
        </group>
    )
}