import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams -= 1;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/ordered']: (state, action) => {
  //     state.numOfIceCreams -= 1;
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIceCreams -= 1;
    })
  }
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions
