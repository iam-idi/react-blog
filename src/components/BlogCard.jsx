
const BlogCard = ({ title, author }) => {
  return (
    <div className="p-3 sm:p-5 shadow rounded sm:rounded-lg mb-6 sm:mb-10">
      <h3 className="text-base sm:text-xl font-bold text-blue-400 mb-2 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base font-semibold text-stone-400">{author}</p>
    </div>
  )
}

export default BlogCard;
