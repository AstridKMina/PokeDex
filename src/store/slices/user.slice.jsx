import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
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