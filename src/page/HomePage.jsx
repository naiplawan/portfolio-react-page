import NavBar from '../component/NavBar';
import MoonModel from '../component/MoonModel';
import ContentSection from '../component/Content-Section';
import Footer from '../component/Footer';


export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start overflow-hidden">
      <NavBar />
      <MoonModel />
      <ContentSection />
      <Footer />
    </div>
  );
}
