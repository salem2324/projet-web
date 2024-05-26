import React, { useState } from "react";


const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); 

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      title,
      content,
      image,
    };
    
    addPost(newPost);
    
    setTitle('');
    setContent('');
    setImage(null); 
  };

  return (
    <div className="testing" style={{maxWidth: '100%', margin:'auto'}}>
      <h2 style={{marginTop: '20px', textAlign: 'center' }}>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <ul><label>Title:</label>
        
        <li> <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
         /></li>
        <label>Content:</label>
        <li><textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
       
        /></li>
         <li> <label>Choose Image:</label><br />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        /></li>

        <li><button type="submit">Add Post</button></li></ul>
      </form>
    </div>
  );
};

export default PostForm;
