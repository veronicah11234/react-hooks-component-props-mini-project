import React from "react";
import About from "./About.js";
import Header from "./Header.js"
import ArticleList from "./ArticleList.js";
import data from "../data/blog";




function App() {
  return (
    <div>
      <Header blogName={data.blogName}/>
      <About image={data.image} aboutText={data.aboutText} />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;
