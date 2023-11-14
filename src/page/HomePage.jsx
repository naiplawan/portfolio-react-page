import { motion } from 'framer-motion';
import NavBar from "../component/NavBar";
import MoonModel from "../component/MoonModel";
import ContentSection from "../component/Content-Section";
import Footer from "../component/Footer";
import WaveComponent from "@/component/Wave";
import { FaArrowDown } from 'react-icons/fa';
import Contact from '@/component/Contact';

export default function HomePage() {


    return (
        <>
            <div className="w-full h-full flex flex-col justify-between">
                <NavBar />
                <MoonModel />
                <ContentSection />
                <Contact />
                <Footer  />
                <WaveComponent/>
                <motion.div
                    className="fixed bottom-12 right-10"
                    animate={{ y: ["0%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <FaArrowDown size={30}/>
                </motion.div>
            </div>
        </>
    );
}