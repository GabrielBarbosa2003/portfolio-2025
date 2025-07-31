import { Canvas } from '@react-three/fiber'
import Estatua from '../Estatua'

export default function Scene() {
 

    return (

        <Canvas>
            <Estatua/>
            <ambientLight color={0xffffff} intensity={1}/>
        </Canvas>
    )
}