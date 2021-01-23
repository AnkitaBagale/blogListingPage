import { useEffect, useState } from 'react';
import React from 'react';
var blogsFetched =[];


function Myblogs() {

  const [blogsContent, setBlogsContent] = useState(["loading"]);

  var url ="https://dev.to/api/articles"
  var usernameQuery = "?username=ankitabagale";
  
  useEffect(()=>{
      fetchData(encodeURI(url+usernameQuery));
      
  }, []);

  async function fetchData(fetchUrl){
    try{
    let response = await fetch(fetchUrl);
    blogsFetched = await response.json();
    
    setBlogsContent(blogsFetched.map(blog =>
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
      setBlogsContent((<p>Oops! we failed to fetch the content. Please try again by refreshing the page.</p>));
    }

  }

  return (
    <div id="root">
      <div id="myblogs">
        <div className="heading">
          <h1>My Blogs</h1>
          <h2>Below is the collection of all the blogs I have written till date</h2>
        </div>
        <div className="grid-container">
          {blogsContent}
        </div>
      </div>
    </div>
  );

}

export default Myblogs;
