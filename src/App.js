import React,{useEffect, useState} from "react"
import CreatePost from "./components/createPost/CreatePost" 
import "./app.css"
import useStyles from "./styles" 
import {AppBar, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts"
import {useSelector} from "react-redux"
import ShowPost from "./components/showPost/ShowPost";

function App() {

  const [pendingPost, setPendingPost] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    setPendingPost(() => {
    return posts.filter(post => post.status !== "done")
  })
  }, [posts])
  
   
  console.log(posts);
 
  return (
    <div className="app"> 
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} align="center"> TODO APP </Typography>
      </AppBar>
      <main className="main_body">

     {/* sections would be replaced with components */}
         <section className="col-1">
            <CreatePost />
         </section>
         <section className="col-2">
           <Typography variant="h5">Pending Posts</Typography>
            {
              pendingPost.map((post) => {
               return <ShowPost key={post._id} post={post}/>
              })
            }
         </section>
         <section className="col-3">
             <Typography variant="h5">Completed Posts</Typography>
         </section>
      </main>
      
    </div>
  );
}

export default App;
