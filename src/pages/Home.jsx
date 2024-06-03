import { Link, useLoaderData } from "react-router-dom"
import BlogCard from "../components/BlogCard"

const Home = () => {
    let blogs = useLoaderData();

  return (
    <>
      { blogs.length >= 1 ?
        (<div className="py-6 sm:py-10 px-2 sm:px-6">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-400 mb-5 sm:mb-8">All Blogs</h2>
            <div className="p-3 sm:p-4">
            {blogs && blogs.map(blog => {
                return <Link to={blog.id.toString()} key={blog.id}><BlogCard title={blog.title} author={blog.author} /></Link>
            })}
            {!blogs && <div className="text-lg sm:text-2xl font-bold text-stone-400 text-center animate-bounce">Failed to fetch blogs</div>}
            </div>
        </div>) : (<h2 className="text-base sm:text-xl text-center font-bold text-blue-400 mb-2 mt-6 sm:mt-8  sm:mb-4">No blog posts have been written </h2>)
      }
    </>
    )
}

export default Home;
