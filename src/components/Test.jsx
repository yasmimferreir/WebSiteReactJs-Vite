import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

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
                <Cube />
            </Canvas>
        </Contaier>
    )
}

export default Test;