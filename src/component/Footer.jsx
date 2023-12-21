function Footer() {
  return (
    <>
    <footer className="bg-gray-800 p-3 mt-10 text-center text-white m-3 rounded-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2">rachaphol.plo@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-2">This website is created by naiplawan</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <p className="mt-2">© Copyright 2023 | naiplawan</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;