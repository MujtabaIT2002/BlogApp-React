import { Link } from "react-router-dom";
const BlogList = (props) => {
    const res=props.b;
   
    return ( 
        <div className="blog_list">
            {res.map((blog)=>(
            <div className="blog_prev"key={blog.id}>
                <Link to={`/Blogdetails/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </Link>
                
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;