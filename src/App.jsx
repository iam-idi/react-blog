import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
// layouts
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NewBlog from "./pages/NewBlog";
import Blog from "./pages/Blog";
import UpdateBlog from "./pages/updateBlog";
// components
import ErrorElement from "./components/ErrorElement";
// utils
import { blogDetailsLoader } from "./utils/blogDetailsLoader";
import { blogsLoader } from "./utils/blogsLoader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<RootLayout />} errorElement={<ErrorElement />}>
        <Route index element={<Home />} loader={blogsLoader} errorElement={<ErrorElement />}></Route>
        <Route path=':id' element={<Blog />} loader={blogDetailsLoader}></Route>
        <Route path="newBlog" element={<NewBlog />}></Route>
        <Route path="updateBlog/:id" element={<UpdateBlog/>}  loader={blogDetailsLoader}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div className="bg-stone-100 min-h-[100vh] px-6 sm:px-20 md:px-32">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
