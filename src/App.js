import React,{useEffect, useState} from "react"
import {AppBar, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts"
import {useSelector} from "react-redux"
import ShowPost from "./components/showPost/ShowPost";
import CreatePost from "./components/createPost/CreatePost" 
import "./app.css"
import useStyles from "./styles" 

function App() {

  const [pendingPost, setPendingPost] = useState([]);
  const [completedPost, setCompletedPost] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId])

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    setPendingPost(() => {
    return posts.filter(post => post.status !== "done")
  })

  setCompletedPost(() => {
    return posts.filter(post => post.status === "done")
  })
  }, [posts])
  
   
  console.log(posts);
 
  return (
    <div className="app"> 
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading}  fontSize="2rem" align="center"> TODO APP </Typography>
      </AppBar>
      <main className="main_body">

     {/* sections would be replaced with components */}
         <section className="col-1">
            <Typography variant="h5" className={classes.col_heading}>Create Task</Typography>
            <CreatePost currentId={currentId} setCurrentId={setCurrentId}/>
         </section>
         <section className="col-2">
           <Typography variant="h5" className={classes.col_heading} >Pending Tasks</Typography>
            {
              pendingPost.map((post) => {
               return <ShowPost key={post._id} post={post} setCurrentId={setCurrentId}/>
              })
            }
         </section>
         <section className="col-3">
             <Typography variant="h5" className={classes.col_heading}>Completed Tasks</Typography>
             {
              completedPost.map((post) => {
               return <ShowPost key={post._id} post={post} setCurrentId={setCurrentId}/>
              })
            }
         </section>
      </main>
      
    </div>
  );
}

export default App;
