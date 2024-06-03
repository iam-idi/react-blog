import { Link, useRouteError } from "react-router-dom";

const ErrorElement = ({errMessage}) => {
  let error = useRouteError();
  return (
    <div className="py-[20vh]">
      <h2 className="text-xl sm:text-3xl font-bold text-blue-400 text-center my-8">Error</h2>
      <div className="text-lg sm:text-2xl font-bold text-stone-400 text-center">{errMessage ? errMessage : error.message}</div>
      <Link to="/" className="text-sm sm:text-base font-semibold text-stone-400 border-blue-400 p-1 border-b-2 text-center block mx-auto w-fit my-8">Go back to Home</Link>
    </div>
  )
}

export default ErrorElement;
