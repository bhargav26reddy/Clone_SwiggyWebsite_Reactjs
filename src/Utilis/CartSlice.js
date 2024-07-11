import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        cartholder:{}
     },
     reducers:{
        Addcart :(state, action)=>{
            if(state.cartholder[action.payload.id]){
                //existing
                state.cartholder[action.payload.id].push(action.payload)
            }else{
                const obj = []
                obj.push(action.payload)
                state.cartholder[action.payload.id] = obj
            }
           
        },
        removeItem:(state, action)=>{
            if(!state.cartholder[action.payload.id]){
                //no item present
                return
            }else{
                state.cartholder[action.payload.id].pop()
            }
        }
     }

})

export const {Addcart,  removeItem} = CartSlice.actions;
export default CartSlice.reducer;