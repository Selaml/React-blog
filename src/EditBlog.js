import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditBlog =()=>{
  const {id}=useParams();
  const {data:blog}=useFetch('http://localhost:8000/blogs/'+ id)
  const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    // const {id}=useParams();
    

  // const [IsPending,setIsPending]=useState(false);
    const history =useHistory();

   
    useEffect(()=>{
      setTitle(blog?.title);
      setBody(blog?.body);
      setAuthor(blog?.author);
   
    },   [blog]);

    const handleEdit = (e)=>{
      e.preventDefault();
      const blog = {title,body,author};
     // console.log (blog);
  //   setIsPending(true);
     fetch('http://localhost:8000/blogs/'+ id, {
      method:'PUT',
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(blog)
     }).then(()=>{
      console.log('new blog added');
     // setIsPending(false);
     

     })
     history.push('/')

  }
    return (
        <div className="create">
            <h2>Add A new Bolg</h2>
            <form onSubmit={handleEdit}>
            <label>Blog title</label>
            <input type ="text" value={title} required onChange={(e)=>setTitle(e.target.value)} ></input>
            <label>Blog Body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
             <label>Blog Author</label>
             <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value= "yoshi">Yoshi</option>
             </select>
           {  <button>Add Blog</button>}
           {/* <button disabled>Adding Blog...</button>*/}
            </form>
        </div>

    );
}
export default EditBlog;