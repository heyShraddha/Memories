import React from 'react';
import useStyles from './styles';
import moment from 'moment';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Post = (post) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post?.post?.selectedFile} title={post?.post?.title}/>
            <div className={classes.overlay}>
                <Typography varient="h6">{post?.post?.creator}</Typography>
                <Typography varient="h6">{moment(post?.post?.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={()=> {}}>
                <MoreHorizIcon fontSize="default" />
                </Button>                
            </div>
            <div className={classes.details} >
                <CardContent />
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={()=> {}}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like
                        {/* {post?.post?.likeCount} */}
                    </Button>
                    <Button size="small" color="primary" onClick={()=> {}}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
                {/* <Typography varient="body2" color="textSecondary">{post.map((pos)=>{return `#${pos?.post?.tag}`})}</Typography> */}
                <Typography varient="h5" className={classes.title} gutterButton>{post?.post?.message}</Typography>
            </div>

        </Card>
    )
}

export default Post; 