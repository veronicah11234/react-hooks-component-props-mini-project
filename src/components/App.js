import React from "react";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import blogData from '../data/blog';

function App() {
  const { blogName, aboutText, image, posts } = blogData;

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About aboutText={aboutText} image={image} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
