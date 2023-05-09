import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BolgDetails =()=>{
    const {id}=useParams();
    const {data:blog,error,IsPending}=useFetch(' http://localhost:8000/blogs/'+ id)
    const history =useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(()=>{

            history.push('/')

        })


    }
    const handleEdit=()=>{
       
    history.push('/edit')
        console.log('hey');
       
    }


    
    return (
        <div className="blog-details">
          {IsPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {blog && (<article>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
          </article>)}
          <button onClick={handleClick}>Delete</button>

          <Link to={`/edit/${id}`}>
          <button  value >Edit</button>
      
          </Link>
         
        </div>

    );
}
export default BolgDetails;