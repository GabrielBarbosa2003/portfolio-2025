import { MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'
import { RGBELoader } from 'three-stdlib'
import { useControls, Leva } from 'leva'

function CameraRig() {
  useFrame((state, delta) => {
    const rangeX = 1.5
    const rangeY = 1.5
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
  const { viewport } = useThree()
  //const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

  const isMobile = window.innerWidth < 801;
  //geometry={nodes.Torus.geometry}
  return (
    <group>
      <mesh geometry={nodes.Torus.geometry} rotation={!isMobile ? [1.6, 0, 0] : [1.4, 0, 0]} scale={!isMobile ? [0.8, 0.8, 0.8] : [0.4, 0.4, 0.4]}>
        {/* <torusGeometry args={[2, 0.7, 8, 20]} /> */}
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
      {/* <OrbitControls /> */}
    </group>
  )
}