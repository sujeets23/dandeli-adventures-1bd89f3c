import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-6">
      <div className="text-center w-full max-w-sm mx-auto text-white">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-slate-300">Oops! Page not found</p>
        <a href="/" className="text-amber-300 underline hover:text-amber-400">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
