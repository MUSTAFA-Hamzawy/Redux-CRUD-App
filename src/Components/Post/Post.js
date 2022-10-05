import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Post.css'
import { addPost } from '../../Redux/Slices/PostSlice';


export default function Post() {
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const dipatcher = useDispatch()
    const allPosts = useSelector((state)=>state.posts.postsData /* This refers to sotre.js->reducers */)


    return (
    <div>
        <form className='myForm'  method='GET' >
            <input className='post-title' type={"text"} placeholder='Enter Post Title.'
            onChange={(e)=>{setPostTitle(e.target.value)}}
            />
            <input className='post-desc' type={"text"} placeholder='Enter Post Description.'
            onChange={(e)=>{setPostDescription(e.target.value)}}
            />
            <input type={'submit'} value='Add'
            onClick={()=>dipatcher(addPost({id:allPosts.length + 1, title: postTitle, description: postDescription}))}
            />
        </form>
        {allPosts.length > 0 ?
            allPosts.map(
                post =>
                 <div className='post' > )
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                </div>
            )
        : 'Post here anything in your mind.....'}

        
            
    </div>
  )
}
