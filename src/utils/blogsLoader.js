
export const blogsLoader = async () => {
    let res = await fetch("http://localhost:8000/blogs");
    if(!res.ok){
        throw new Error('Something went wrong!')
    }
    return res.json()
}