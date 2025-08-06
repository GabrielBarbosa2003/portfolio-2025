import { MeshTransmissionMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

const isMobile = window.innerWidth < 801;

function CameraRig() {
  useFrame((state, delta) => {
    const rangeX = !isMobile ? 1.5 : 3
    const rangeY = !isMobile ? 1.5 : 3
    const targetX = state.pointer.x * rangeX
    const targetY = -state.pointer.y * rangeY
    easing.damp3(state.camera.position, [targetX, targetY, 5], 0.3, delta)
    state.camera.lookAt(0, 0, 0)
  })
}
export default function Estatua() {
  const suzi = '/torus-2.glb'
  const { nodes } = useGLTF(suzi)
  const matcapTexture = useTexture('/1.png')
  matcapTexture.flipY = false
  matcapTexture.colorSpace = THREE.SRGBColorSpace

  return (
    <group>
      <mesh geometry={nodes.Torus.geometry} rotation={!isMobile ? [1.6, 0, 0] : [1.4, 0, 0]} scale={!isMobile ? [0.8, 0.8, 0.8] : [0.4, 0.4, 0.4]}>
        {!isMobile ? 
         <MeshTransmissionMaterial
        thickness={0}
        roughness={0}
        transmission={1}
        ior={0.7}
        chromaticAberration={0}
        backside={false}
         /> :
         <meshMatcapMaterial matcap={matcapTexture}/>
        }
       
         
      </mesh>

      <perspectiveCamera />
      <CameraRig />
    </group>
  )
}