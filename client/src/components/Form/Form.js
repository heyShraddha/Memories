import React, { useState } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../actions/posts';
const Form = () => {
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }
    const clear = () => {

    }
    const [postData, setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:'',
    });
    const dispatch = useDispatch();
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value})} />
                <TextField name="text" variant="outlined" label="Text" fullWidth value={postData.text} onChange={(e)=> setPostData({ ...postData, text: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64 })}/> 
                </div>
                <Button className={classes.button} varient="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button className={classes.button} onClick = {clear} varient="contained" color="primary" size="small"  fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form; 