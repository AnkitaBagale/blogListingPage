import { useEffect, useState } from 'react';
import React from 'react';
var blogsFetched =[];


function Myblogs() {

  const [blogsContent, setBlogsContent] = useState(["loading..."]);

  var url ="https://dev.to/api/articles?username=ankitabagale";
  
  useEffect(()=>{
    async function fetchData(){
      try{
      let response = await fetch(encodeURI(url));
      blogsFetched = await response.json();
      
      setBlogsContent(blogsFetched.map(blog =>
        (<div className="grid-item" key={blog.id}>
          <img className="coverImg" alt="blog_cover_image" src={blog.cover_image}></img>
          <div className="text-section">
            <span className="secondary-link"><i className="fas fa-heart"></i>{blog.positive_reactions_count}</span>
            <time className="secondary-link"><i className="fas fa-calendar-alt"></i> {blog.readable_publish_date}</time>
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
      
    fetchData();
  },[]);

  return (
      <div id="myblogs">
        <div className="heading">
          <h1>My Blogs</h1>
          <h2>Below is the collection of all the blogs I have written till date</h2>
        </div>
        <div className="grid-container">
          {blogsContent}
        </div>
      </div>
  );

}

export default Myblogs;
