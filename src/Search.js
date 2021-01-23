import { useEffect, useState } from 'react';
import React from 'react';

var blogsFetched =[];
var filteredBlogs = [];
var enteredTag='';


function Search() {

  const [blogsContent, setBlogsContent] = useState("");
  
  var url ="https://dev.to/api/articles";
    
  useEffect(()=>{
    async function fetchData(){
      try{
      let response = await fetch(encodeURI(url));
      blogsFetched = await response.json();   
      } 
      catch{
        blogsFetched = [];
      }
  
    }
    fetchData();  
  });

  

  return (  
      <div id="searchblogs">
        <div className="heading">
          <h1>Search Blogs</h1>
          <h2>Enter a tag in below search bar e.g. javascript</h2>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          filteredBlogs = blogsFetched.filter((blog)=>blog.tag_list.includes(enteredTag));
          if(filteredBlogs.length>=1){
            setBlogsContent(filteredBlogs.map(blog =>
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
          else{
              setBlogsContent(<p style={{gridColumn: "1 / 3"}}>Oops! We did not found matching blogs. Please try any other tag.</p>);
          }
        }}>
          <input onChange={(e)=>{
              enteredTag= e.target.value;
          }} type="text" placeholder="Search..." required/>
          <button>Search</button>
          <div className="grid-container">
          {blogsContent}
        </div>
        </form>
      </div>
  );

}

export default Search;
