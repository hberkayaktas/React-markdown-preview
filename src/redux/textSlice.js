import { createSlice } from "@reduxjs/toolkit";
import { duzenle } from '../scriptDuzenle';
export const textSlice = createSlice({
      name:"textG",
      initialState:{
            items:[],
      },
      reducers:{
            setTextState:(state,action) => {
                  state.items = duzenle(action.payload);
                  //console.log(action.payload);
            }
      }
});
export const selectText = (state) => state.textG.items;


export const { setTextState } = textSlice.actions;
export default textSlice.reducer;