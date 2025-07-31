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
  const matcapTexture = useTexture('/new-10.jpg')
  matcapTexture.flipY = false
  matcapTexture.colorSpace = THREE.SRGBColorSpace
  const { viewport } = useThree()

  const isMobile = window.innerWidth < 550;
  //geometry={nodes.Torus.geometry}
  return (
    <group>
      <mesh  rotation={[0, 0, 0]} scale={!isMobile ? [0.7, 0.7, 0.7] : [0.3, 0.3, 0.3]}>
        <torusGeometry args={[2, 0.7, 16, 40]} />
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>

      <perspectiveCamera/>
      <CameraRig/>
      {/* <OrbitControls /> */}
    </group>
  )
}