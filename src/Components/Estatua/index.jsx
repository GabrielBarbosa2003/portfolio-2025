import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

function CameraRig() {
  useFrame((state, delta) => {
    const rangeX = 1
    const rangeY = 1
    const targetX = state.pointer.x * rangeX
    const targetY = -state.pointer.y * rangeY
    easing.damp3(state.camera.position, [targetX, targetY, 5], 0.3, delta)
    state.camera.lookAt(0, 0, 0)
  })
}
export default function Estatua() {
  const suzi = '/torus.glb'
  const { nodes } = useGLTF(suzi)
  const matcapTexture = useTexture('/2.png')
  matcapTexture.flipY = false
  matcapTexture.colorSpace = THREE.SRGBColorSpace
  const { viewport } = useThree()

  const isMobile = window.innerWidth < 550;
  return (
    <group>
      <mesh geometry={nodes.Torus.geometry} rotation={[1.6, 0, 0]} scale={[1.5,1.5,1.5]}>
        
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>

      <perspectiveCamera/>
      <CameraRig/>
      {/* <OrbitControls /> */}
    </group>
  )
}