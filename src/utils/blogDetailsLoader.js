export const blogDetailsLoader = async ({ params }) => {
    let { id } = params;
    
    let res = await fetch("http://localhost:8000/blogs?id=" + id);
    if(!res.ok){
        throw new Error('Something went wrong!')
    }
    return await res.json();
}