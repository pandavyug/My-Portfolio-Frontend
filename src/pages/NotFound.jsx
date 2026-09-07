// import { Link } from "react-router-dom";
// import { ArrowLeft, Home } from "lucide-react";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
//       <div className="text-center">

//         {/* 404 */}
//         <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-extrabold leading-none text-blue-600">
//           404
//         </h1>

//         {/* Message */}
//         <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
//           Page Not Found
//         </h2>

//         <p className="mt-3 max-w-md mx-auto text-slate-500">
//           Oops! The page you're looking for doesn't exist or may have
//           been moved.
//         </p>

//         {/* Home Button */}
//         <Link
//           to="/"
//           className="inline-flex items-center gap-2 mt-8 px-6 py-3
//           rounded-lg bg-blue-600 text-white font-medium
//           hover:bg-blue-700 hover:scale-105
//           transition-all duration-300 shadow-lg shadow-blue-600/20"
//         >
//           <Home size={19} />
//           Back to Home
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default NotFound;

import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#071A2B] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-[#2A6D72]/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-[#2563EB]/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative text-center">

        {/* 404 */}
        <h1
          className="text-[120px] sm:text-[160px] md:text-[200px]
          font-extrabold leading-none
          bg-gradient-to-r from-[#8FDDE2] via-[#4CA8B0] to-[#2563EB]
          bg-clip-text text-transparent
          drop-shadow-[0_0_30px_rgba(76,168,176,0.25)]"
        >
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-[#A8BBCB] leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have
          been moved to another location.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8
          px-6 py-3 rounded-xl
          bg-[#2A6D72] text-white
          font-medium
          border border-[#4CA8B0]/30
          shadow-lg shadow-[#2A6D72]/20
          hover:bg-[#347F85]
          hover:shadow-[#2A6D72]/40
          hover:-translate-y-1
          transition-all duration-300"
        >
          <Home size={19} />
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;

