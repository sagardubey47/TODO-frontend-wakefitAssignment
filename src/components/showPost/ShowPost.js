import React from 'react'
import useStyles from "./styles" 
import {Card, CardActions, CardContent, Button, Typography} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from "moment"
import {useDispatch} from "react-redux" 
import {deletePost} from "../../actions/posts"


export default function ShowPost({post, setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        
       <Card className={classes.card}>
          <div className={classes.overlay}>
              <Typography variant="h6">{post.creator}</Typography>
          </div>
          <div className={classes.overlay2}>
              <Button style={{color: '#ccc'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                   <MoreHorizIcon fontSize="default" />
              </Button> 
          </div>
          
          <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
          <CardContent>
               <Typography variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              
              <Button size="small" color="primary" onClick={()=>{ dispatch(deletePost(post._id))}}>
                  <DeleteIcon fontSize="small"/>
                   Delete
              </Button>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </CardActions>
       </Card>
    )
}
