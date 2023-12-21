import { Link } from 'react-router-dom';
import ErrorIcon from "../assets/12492586_5000818.svg"

export default function NotFoundPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 ">
            <div className="flex flex-col justify-center items-center">
                <img src={ErrorIcon} alt="404 Error" className="w-96" />
                <div className='flex flex-col justify-center text-center'>
                    <div className="text-white text-6xl">404</div>
                    <div className="text-white text-xs">Page Not Found</div>
                </div>
                <Link to="/" className="text-white text-2xl mt-10">
                    <button className="bg-gray-500 rounded-full px-4 py-2">
                        Go back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
