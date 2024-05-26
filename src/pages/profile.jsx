import React, { useState } from "react";
import Header from './header.jsx';
import PostForm from "./home";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <div className="divprofile" style={{maxWidth: '30%', margin:'auto'}}>

      <PostForm addPost={addPost}/>
      <br /><br /><br />  
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.image && ( 
              <img src={URL.createObjectURL(post.image)} alt="" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            )}<hr />
          </li>
        ))}
      </ul>
    </div>


    </div>
  );
};

export default Profile;
