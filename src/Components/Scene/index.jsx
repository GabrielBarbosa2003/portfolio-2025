import { Canvas } from '@react-three/fiber'
import Estatua from '../Estatua'
import { Environment } from '@react-three/drei'

export default function Scene() {
 

    return (

        <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
            <Estatua/>
            <ambientLight color={0xffffff} intensity={5}/>
             {/* <directionalLight intensity={2} position={[0, 2, 3]}/> */}
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" resolution={256}/>
        </Canvas>
    )
}