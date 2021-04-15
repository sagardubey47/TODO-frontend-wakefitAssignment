import React from 'react'
import useStyles from "./styles" 
import {useSelector} from "react-redux"
import {Grid, CircularProgress} from "@material-ui/core"
import Post from "./post/post"

export default function Posts({setCurrentId}) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    
    return (
       !posts.length ? <CircularProgress />: (
           <Grid className={classes.mainContainer} container alignItems="stretch" spacing={4}>
               {
                   posts.map((post, index) => {
                      return <Grid key={index} item xs={12} sm={6}>
                                 <Post key={index} post={post} setCurrentId={setCurrentId}/>   
                             </Grid>
                   })
               }
           </Grid>
       )
    )
}
