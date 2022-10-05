import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name: 'posts',
    initialState : {
        postsData : []
    },
    reducers : {        // actions
        addPost : function(state, action){
            state.postsData.push(action.payload);
        },

    },
    
  })
  
  // Action creators are generated for each case reducer function
  export const { addPost } = PostSlice.actions
  
  export default PostSlice.reducer