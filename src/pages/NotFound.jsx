import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="py-[20vh]">
      <h2 className="text-4xl sm:text-8xl font-extrabold text-blue-400 text-center my-4">404</h2>
      <div className="text-lg sm:text-2xl font-bold text-stone-400 text-center">oops, Page not found!</div>
      <Link to="/" className="text-sm sm:text-base font-semibold text-stone-400 border-blue-400 p-1 border-b-2 text-center block mx-auto w-fit my-8">Go back to Home</Link>
    </div>
  )
}

export default NotFound;
