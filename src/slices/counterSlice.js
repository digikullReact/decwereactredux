import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Action methods
    addTodo: (state,request) => {
     
      state.todos.push(request.payload);
    
    },

    deleteTodo:(state,request)=>{

      state.todos.splice(request.payload)

    }
    
  },
})

// Action creators are generated for each case reducer function
export const {addTodo,deleteTodo } = counterSlice.actions

export default counterSlice.reducer