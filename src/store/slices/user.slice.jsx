import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'User',
  initialState: '',
  reducers: {
    changeUser: (state, actions) => {
      return actions.payload
    }
  }
})

export const { changeUser} = userSlice.actions;

export default userSlice.reducer;