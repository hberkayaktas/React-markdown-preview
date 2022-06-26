import { createSlice } from "@reduxjs/toolkit";
import { duzenle } from '../scriptDuzenle';
export const textSlice = createSlice({
      name:"textG",
      initialState:{
            items:[],
            itemSafhali : "",
      },
      reducers:{
            setTextState:(state,action) => {
                  state.items = duzenle(action.payload);
                  //console.log(action.payload);
                  state.itemSafhali = action.payload;
            }
      }
});
export const selectText = (state) => state.textG.items;
export const itemSafhali = (state) => state.textG.itemSafhali;


export const { setTextState } = textSlice.actions;
export default textSlice.reducer;