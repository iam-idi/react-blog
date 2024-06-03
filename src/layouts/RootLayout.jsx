import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div>
      <ToastContainer />
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-b-2 border-stone-300">
        <h1 className="text-xl sm:text-3xl font-bold text-blue-400 mb-6 sm:mb-0">The React Blog</h1>
        <nav className="flex justify-center items-center gap-3 sm:gap-6">
            <NavLink to="/" className="text-sm sm:text-base font-semibold text-stone-400">Home</NavLink>
            <NavLink to="newBlog" className="text-sm sm:text-base font-semibold text-stone-400">New Blog</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center p-2 sm:p-3 border-t-2 border-stone-300">
        <h2 className="text-sm sm:text-base font-semibold text-stone-400">Created By iDi</h2>
      </footer>
    </div>
  )
}

export default RootLayout;
