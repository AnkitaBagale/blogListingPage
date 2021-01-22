import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { render } from '@testing-library/react';

var blogsFetched =[];

function App() {

  const [blogsContent, setBlogsContent] = useState(["loading"]);
  var url ="https://dev.to/api/articles"
  var usernameQuery = "?username=ankitabagale";
  
  useEffect(()=>{
      fetchData(encodeURI(url+usernameQuery));
      
  }, []);

  async function fetchData(fetchUrl){
    try{
    let response = await fetch(fetchUrl);
    let json = await response.json();
    
    setBlogsContent(json.map(blog =>
      (<div className="grid-item" key="item">
        <img className="coverImg" alt="blog_cover_image" src={blog.cover_image}></img>
        <div className="text-section">
          <span className="secondary-link"><i class="fas fa-heart"></i>{blog.positive_reactions_count}</span>
          <time className="secondary-link"><i class="fas fa-calendar-alt"></i> {blog.readable_publish_date}</time>
          <h3 className="title">{blog.title}</h3>
          <p className="description">{blog.description}</p>
          <a className="primary-link" href={blog.url}>Read more</a>
        </div>
      </div>) ));
    } 
    
    catch{
      alert("Something is wrong, please try again later")
    }

  }

  return (
    <div id="root">
      <h1>My Blogs Page</h1>
      <p style={{fontSize:"24px"}}>Under construction...</p>
      <div className="grid-container">
        {blogsContent}
      </div>

      <footer>Footer</footer>
    </div>
  );

}

export default App;
