import React,{useEffect, useState} from "react"
import "./app.css"

import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts"
import {useSelector} from "react-redux"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  const posts = useSelector((state) => state.posts);
   
  console.log(posts);

  return (
    <div className="app">
      <header className="heading">
         TODO APP (backend completed..working on frontend)
      </header>
      <main className="main_body">

     {/* sections would be replaced with components */}
         <section className="col-1">
            <form>
              <label htmlFor="title">Title</label>
              <input type="text" name="title"/><br />
              <label htmlFor="message">Message</label>
              <input type="text" name="message"/><br />
            </form>
         </section>
         <section className="col-2">
            column 2
         </section>
         <section className="col-3">
             column 3  
         </section>
      </main>
      
    </div>
  );
}

export default App;
