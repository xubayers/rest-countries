export default function Loader() {
  return (
    <div className="bg-neutral-700 h-screen w-full flex justify-center items-center absolute top-0 left-0 z-30">
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-1"></span>
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-2"></span>
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-3"></span>
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-4"></span>
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-5"></span>
      <span className="w-1  h-10 ml-2 shadow-lg shadow-yellow-300 animate-load bg-yellow-600 rounded-md delay-6"></span>
    </div>
  );
}
