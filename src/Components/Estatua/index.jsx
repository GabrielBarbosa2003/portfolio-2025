import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

function CameraRig() {
  useFrame((state, delta) => {
    const rangeX = 0.3
    const rangeY = 0.2
    const targetX = state.pointer.x * rangeX
    const targetY = -state.pointer.y * rangeY
    easing.damp3(state.camera.position, [targetX, targetY, 5], 0.3, delta)
    state.camera.lookAt(0, 0, 0)
  })
}
export default function Estatua() {
  const suzi = '/3d/estatua-ble.glb'
  const { nodes, scene } = useGLTF(suzi)
  const matcapTexture = useTexture('/new-10.jpg')
  matcapTexture.flipY = false
  matcapTexture.colorSpace = THREE.SRGBColorSpace
  const { viewport } = useThree()


  const isMobile = window.innerWidth < 550;
  console.log(nodes)

  return (
    <group>
      <primitive
        object={scene}
        scale={!isMobile ? [2, 2, 2] : [1, 1, 1]}
        rotation={[1.4, 0, 0]}
        position={!isMobile ? [0, -0.5, 1.8] : [0, -0.9, 1.8]}
      />

      <perspectiveCamera />
      {/* <OrbitControls /> */}
    </group>
  )
}