import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-9xl text-red-600 font-bold animate-pulse">404</h1>
        <p className="text-2xl mt-4">
          {"Oops! The page you're looking for can't be found."}
        </p>
        <p className="text-lg m-2">
          {"But don't worry, you can always go back to the homepage!"}
        </p>
        <Link to="/">
          <button className="px-4 mt-8 md:px-8 py-1 md:py-3 font-medium cursor-pointer hover:bg-white hover:text-purple-500 bg-purple-500 text-white transition duration-300">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
