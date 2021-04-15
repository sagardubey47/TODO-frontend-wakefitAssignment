import React,{useEffect, useState} from 'react'
import useStyles from "./styles" 
import {Paper, TextField, Button, Typography} from "@material-ui/core"
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import {useSelector} from "react-redux" 

export default function CreatePost({currentId, setCurrentId}) {
    
    const [postData, setPostData] = useState({creator:'', title:'', message:'', status:''});
    const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId): null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
       if(post) setPostData(post);
    }, [post])

     const handleSubmit = (e) => {
         e.preventDefault();

         if(currentId) {
             dispatch(updatePost(currentId, postData));
         } else {
             dispatch(createPost(postData));
         }
         clear();
     }

     const clear = () => {
         setCurrentId(null);
         setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''});
     }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <Typography variant="h6"> {currentId ? `Editing` : `Creating`} a Todo Post</Typography>
              <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator:e.target.value})} /> 
              <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title:e.target.value})} /> 
              <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message:e.target.value})} /> 
              <TextField name="status" variant="outlined" label="status eg: pending, done" fullWidth value={postData.status} onChange={(e) => setPostData({...postData, status:e.target.value.split('')})} /> 
              
             
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
              <Button  style={{"marginTop":"10px"}} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
             
            </form>
        </Paper>
    )
}
