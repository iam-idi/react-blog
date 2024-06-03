import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const NewBlog = () => {
  let Navigate = useNavigate();

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let [author, setAuthor] = useState('iDi');

  let formData = {
    title,
    content,
    author
  }

  let handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify(formData)
      })
      if(!res.ok){
        throw Error("Something went wrong");
      }

      toast.success('Blog post created successsfully');
      
      setTimeout(() => {
        Navigate('/')
      },1000)
      
    } catch (error) {
     toast.error(error.messsage);
    }
  }


  return (
    <div className="py-6 sm:py-10 px-2 sm:px-6">
      <h2 className="text-lg sm:text-2xl font-bold text-stone-400 mb-5 sm:mb-8 text-center">Add a New Blog</h2>
      <form action="" onSubmit={handleSubmit} className="my-0 mx-auto w-fit">
        <label htmlFor="" className="block text-sm sm:text-base font-semibold text-blue-400 my-2 sm:my-4">Blog Title:</label>
        <input className="block text-sm sm:text-base text-stone-500 my-2 sm:my-4 border-2 border-stone-400 focus:border-blue-400 outline-none rounded px-1 sm:px-2 min-w-[200px] sm:min-w-[300px] w-[40vw] bg-inherit h-[35px] sm:h-[40px]" onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} required/>
        <label htmlFor="" className="block text-sm sm:text-base font-semibold text-blue-400 my-2 sm:my-4">Blog Content:</label>
        <textarea className="block text-sm sm:text-base text-stone-500 my-2 sm:my-4 border-2 border-stone-400 focus:border-blue-400 outline-none rounded px-1 sm:px-2 min-w-[200px] sm:min-w-[300px] w-[40vw] bg-inherit h-[100px] sm:h-[120px]" onChange={(e) => setContent(e.target.value)} name="content" value={content} required></textarea>
        <label htmlFor="" className="block text-sm sm:text-base font-semibold text-blue-400 my-2 sm:my-4">Author:</label>
        <select className="block text-sm sm:text-base text-stone-500 my-2 sm:my-4 border-2 border-stone-400 focus:border-blue-400 outline-none rounded px-1 sm:px-2 min-w-[200px] sm:min-w-[300px] w-[40vw] bg-inherit h-[35px] sm:h-[40px]" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required>
          <option>iDi</option>
          <option>Kira</option>
        </select>
        <button className="block text-sm font-bold sm:text-base text-stone-500 mt-4 mx-auto sm:mt-8 focus:border-blue-400 rounded px-1 sm:px-2 min-w-[150px] sm:min-w-[200px] w-[30vw] bg-blue-400 h-[35px] sm:h-[45px] transform active:scale-95">Add Blog</button>
      </form>
    </div>
  )
}

export default NewBlog;
