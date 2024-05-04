import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BlogForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };

    try {
      const response = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        throw new Error('Could not add the blog');
      }

      console.log('Blog added successfully!');
      
      setTitle('');
      setBody('');
      setAuthor('');
     
      navigate('/'); 
    } catch (error) {
      console.error('Error adding blog:', error.message);
    }
  };

  return (
    <div className="blog-form-container">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea 
            id="body" 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            required 
            className="form-control" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
            className="form-control" 
          />
        </div>
        <button className='form-btn' type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;
