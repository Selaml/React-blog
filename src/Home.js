//import { useState,useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";
const Home =() =>{
 
 const {data:blogs, Ispending, error}= useFetch('http://localhost:8000/blogs')
//  const handleDelete= (id)=>{
 //    const newBlog = blogs.filter(blog=> blog.id !==id);
 //    setBlogs(newBlog);
 // }
 
    return(
    <div className="home">
      {error && <div>{error}</div>}
      { Ispending && <p>Loding...</p>}
       { blogs && <BlogList blogs={blogs} title="All Blogs"/>}  

     {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'selam')} title="My Blogs"/>}
   
    
     { /*<p>{name}</p>*/}
    </div>

    ); 
 }
 export default Home; 