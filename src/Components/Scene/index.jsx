import { Canvas } from '@react-three/fiber'
import Estatua from '../Estatua'
import { Environment } from '@react-three/drei'

export default function Scene() {
    const isMobile = window.innerWidth < 800;

    return (

        <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
            <Estatua/>
            {!isMobile ? <ambientLight color={0xffffff} intensity={5}/> : <></>}
            {!isMobile ? <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" resolution={256}/> : <></>}
        </Canvas>
    )
}