import React, { Suspense, useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Hero from "../components/Hero"
import Overview from "../components/Overview"
import Upload from "../components/Upload"
import TheSun from "../components/TheSun"
import { motion, useScroll, useTransform } from "framer-motion"
import TheMoon from './TheMoon'
// import TheMoon from "../components/TheMoonModel"


function Home({ data, setData, setOperation, operation }) {
    const sunRef = useRef();
    const moonRef = useRef();
    const { scrollYProgress } = useScroll({
        target: sunRef,
        offset: ["start start", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
    return (
        <React.Fragment>
            <Hero />
            <Overview />
            <div ref={sunRef} style={{ scale }} className="canvas">
                <Canvas>
                    <Suspense fallback={null}>
                        <TheSun />
                        <OrbitControls autoRotate enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
            {/* <div className="canvas">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight intensity={1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                        <TheMoon />
                        <OrbitControls autoRotate enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div> */}
            <Upload data={data} setData={setData} setOperation={setOperation} operation={operation}/>
        </React.Fragment>

    )
}

export default Home