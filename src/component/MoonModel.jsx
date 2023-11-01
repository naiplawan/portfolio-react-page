import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Moon from "../../public/Moon.jsx"
import { Environment, OrbitControls } from "@react-three/drei";

export default function MoonModel() {
  return (
    <>
    <div className="p-2 flex flex-row "> 
      <Canvas style={{ height: "100vh !important", width:"50vw" }}>
        <ambientLight intensity={0.5}/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Moon />
        </Suspense> 
        <Environment preset="sunset"/>
      </Canvas>
      <div className="flex items-center"> 
    <p> "That's one small step for man, one giant leap for mankind." </p>
    </div>
      </div>
    </>
  )
}
