import { OrbitControls, RenderTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
//import { Color } from "@react-three/drei";


const Contaier = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;

`

const Test = () => {
    return(
        <Contaier>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshStandardMaterial>
                        <RenderTexture args={["red"]}>
                         
                        
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Contaier>
    )

}

export default Test;



/*
   <Color attach="background" args={["pink"]}/>
                            <Text fontSize={3} Color="#333">
                                heloo
                            </Text>
                            */