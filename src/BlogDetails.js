import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, error, pending } = useFetchData('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Could not delete the blog');
            }

            console.log('Blog deleted successfully!');
            
            navigate('/');
        } catch (error) {
            console.error('Error deleting blog:', error.message);
        }
    };

    return (
        <div className="blog_details">
            <h1>Blog Context</h1>
            {pending && <div>Loading data...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>Written by {data.author}</h2> 
                    <p>{data.body}</p>
                </article>
            )}
            {/* Delete button */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default BlogDetails;
