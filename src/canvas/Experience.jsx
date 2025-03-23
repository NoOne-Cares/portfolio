import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import RoomFirst from '../assets/roomModelParts/First'
import RoomThird from '../assets/roomModelParts/Third'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import RoomSecond from '../assets/roomModelParts/Second'


const Experience = () => {
  const control = useControls({
    x: {
      value: 0,
      min: -100,
      max: 100,
      step: 5
    },
    y: {
      value: 0,
      min: -100,
      max: 100,
      step: 5
    },
    z: {
      value: 0,
      min: -100,
      max: 100,
      step: 5
    },
    scale: {
      value: 2,
      max: 20,
      min: 1,
      step: 0.5
    }

  })
  console.log(control)
  return (

    <Canvas style={{ position: "fixed", zIndex: 1, top: 0, left: 0 }}>

      <Perf position='top-left' />
      <PresentationControls
        // polar={[0, 0.2 * Math.PI / 2]}
        // azimuth={[0.25 * Math.PI, 0.5]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      // snap={true}
      >
        <RoomFirst
          position-x={-25}
        />
        <RoomSecond position-x={-25} />
        <RoomThird position-x={-25} />
        {/* <RoomFourth /> */}
        {/* <RoomFourth position-x={-25} /> */}
        {/* <Group position-x={2}>
        <mesh>
          <planeGeometry />
          <meshBasicMaterial />
        </mesh>

      </Group> */}

        <meshStandardMaterial color="#353540" />
      </PresentationControls>

    </Canvas>


  )
}

export default Experience
