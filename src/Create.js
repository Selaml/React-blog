import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = ()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [IsPending,setIsPending]=useState(false);
    const history =useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};
       // console.log (blog);
       setIsPending(true);
       fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(blog)
       }).then(()=>{
        console.log('new blog added');
        setIsPending(false);
       

       })
       history.push('/')

    }



    return (
        <div className="create">
            <h2>Add A new Bolg</h2>
            <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input type ="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <label>Blog Body</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
             <label>Blog Author</label>
             <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value= "yoshi">Yoshi</option>
             </select>
           { !IsPending && <button>Add Blog</button>}
           { IsPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>

    );
}
export default Create;