import { useRef } from 'react';
import { motion, useScroll } from "framer-motion"
import NavBar from "../component/NavBar";
import MoonModel from "../component/MoonModel";
import ContentSection from "../component/Content-Section";
import Footer from "../component/Footer";
import WaveComponent from "@/component/Wave";
import { FaArrowDown } from 'react-icons/fa';
import SkillSection from '@/component/Skill-Section.jsx';
import Lorem from '@/component/Lorem';
import Contact from '@/component/Contact';

export default function HomePage() {
    const { scrollYProgress } = useScroll();
    const sectionRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-between">
            <motion.div style={{ scaleX: scrollYProgress }} /> 
                <NavBar />
                <MoonModel />
                <div ref={sectionRef}>
                <ContentSection />
                </div>
                <SkillSection />
                <Lorem />
                <Contact />
                <Footer ref={footerRef} />
                <WaveComponent/>
                <motion.div
                    className="fixed bottom-12 right-2"
                    onClick={scrollToFooter}
                    animate={{ y: ["0%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <FaArrowDown size={30}/>
                </motion.div>
            </div>
        </>
    );
}