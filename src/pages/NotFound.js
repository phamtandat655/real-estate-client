import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center w-full h-screen bg-white border-b-2 border-gray-300 border-solid">
            <p className="w-full inline text-3xl">Rất tiếc, trang này hiện không khả dụng. </p>
            <Link to="/" className="underline text-blue-600 mt-5 text-3xl">
                Trở lại !
            </Link>
        </div>
    );
};

export default NotFound;
