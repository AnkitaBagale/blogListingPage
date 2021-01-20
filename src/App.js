import logo, { ReactComponent } from './logo.svg';
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
      (<li key="item">
        <img className="coverImg" alt="blog_cover_image" src={blog.cover_image}></img>
        <h3 className="title">{blog.title}</h3>
        <time>{blog.readable_publish_date}</time>
        <p className="description">{blog.description}</p> 
        <a className="primary-link" href={blog.url}>Read more</a>
      </li>) ));
    } 
    
    catch{
      alert("Something is wrong, please try again later")
    }

  }

  return (
    <div id="root">
      <h1>My Blogs Page</h1>
      <p style={{fontSize:"24px"}}>Under construction...</p>
      <ul>
        {blogsContent}
      </ul>
    </div>
  );

}

export default App;
