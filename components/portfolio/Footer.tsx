import WaveComponent from './Wave';

function Footer() {
  return (
    <>
      <footer className="w-full selection:p-3 mt-10 text-center text-white rounded-t-2xl p-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 py-4">
            <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-sm">rachaphol.plo@gmail.com</p>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="mt-2 text-sm">This website is created by naiplawan</p>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-left">
              <h3 className="text-lg font-semibold">Legal</h3>
              <p className="mt-2 text-sm">© Copyright 2025 | naiplawan</p>
            </div>
          </div>
        </div>
      </footer>
      <WaveComponent />
    </>
  );
}

export default Footer;
