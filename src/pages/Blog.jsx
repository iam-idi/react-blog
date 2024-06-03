import {useParams, useLoaderData, useNavigate} from 'react-router-dom';
import NotFound from './NotFound';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Blog = () => {
    let { id } = useParams();
    let Navigate = useNavigate();

    const handleDelete = async() => {
        try {
            let res = await fetch("http://localhost:8000/blogs/" + id, { method: "DELETE"})
            if(!res.ok){
                throw new Error('Something went wrong')
            }
            toast.success("Blog post Deleted Successfully")
            setTimeout(() => {
                Navigate('/');
            }, 1000)
        } catch (error) {
            toast.error(error.messsage);
        }
    }

    const handleUpdate = () => {
        Navigate('/updateBlog/' + id.toString());
    }

    let blogArr = useLoaderData();
    let blog = blogArr[0];
    
  return (
    blog  ?  (
                <div>
                    <h2 className="text-base sm:text-xl font-bold text-blue-400 mb-2 mt-6 sm:mt-8 sm:mb-4">{blog.title}</h2>
                    <h3 className="text-sm sm:text-base font-semibold text-stone-400 mb-2 sm:mb-4">{`Wriiten by ${blog.author}`}</h3>
                    <div className='mb-4 sm:mb-6 flex justify-start items-center gap-1 sm:gap-2 text-sm sm:text-base font-semibold sm:font-bold'>
                        <FaEdit onClick={handleUpdate} className='text-blue-400 text-2xl sm:text-3xl p-1 transform active:scale-95 cursor-pointer'/>
                        <FaTrash onClick={handleDelete} className='text-red-400 text-xl sm:text-2xl p-1 transform active:scale-95 cursor-pointer'/>
                    </div>
                    <p className="text-base sm:text-lg text-stone-400 mb-6 sm:mb-8">{blog.content}</p>
                </div>
            ) : ( <NotFound /> )
  )
}

export default Blog;
