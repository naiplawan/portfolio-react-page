'use client'

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Moon from "./Moon.jsx"
import { Environment, OrbitControls } from "@react-three/drei";

export default function MoonModel() {
  return (
    <>
      <div className="flex flex-row ">
        <Canvas style={{ height: "100vh !important", width:"50vw"}}>
          <ambientLight color={{intensity: 0.5}}/>
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}>
            <Moon />
          </Suspense>
          <Environment preset="sunset"/>
        </Canvas>
        <div className="flex justify-center items-center w-full h -full text-center m-10">
          &ldquo;That&apos;s one small step for man, one giant leap for mankind.&rdquo; - Neil Armstrong
        </div>
      </div>
    </>
  )
}
