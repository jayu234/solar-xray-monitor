import React, { Suspense, useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Hero from "../components/Hero"
import Overview from "../components/Overview"
import Upload from "../components/Upload"
import TheSun from "../components/TheSun"
import { motion, useScroll, useTransform } from "framer-motion"

function Home({data, setData}) {
    const canvasRef = useRef();
    const { scrollYProgress } = useScroll({
        target: canvasRef,
        offset: ["start start", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
    return (
        <React.Fragment>
            <Hero />
            <Overview />
            <div ref={canvasRef} style={{ scale }} className="canvas">
                <Canvas>
                    <Suspense fallback={null}>
                        <TheSun />
                        <OrbitControls autoRotate enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
            <Upload data={data} setData={setData}/>
        </React.Fragment>

    )
}

export default Home