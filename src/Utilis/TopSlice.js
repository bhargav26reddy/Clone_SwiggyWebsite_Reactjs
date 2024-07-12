import { createSlice } from "@reduxjs/toolkit";

const TopSlice = createSlice({
    name:'Topratedcusines',
    initialState:{
       Topratecus: null,
       Topreschain: null,
       Allres: [],
       resMenu: null,
       filteredsearch:null,
       flag:false,
       city:null,
    },
    reducers:{
        addTopcusines:(state, action)=>{
            state.Topratecus = action.payload
        },
        addTopreschains:(state, action)=>{
            state.Topreschain = action.payload
        },
        addfilteredsearch:(state, action)=>{
            state.filteredsearch = action.payload
        },
        addcity:(state, action)=>{
            state.city = action.payload
        },
        addallres:(state, action)=>{
            if(state.Allres.length >=1){
                state.Allres[0].forEach((e)=>state.Allres[0].push(e))
                return
            }
            state.Allres.unshift(action.payload)
        },
        addmenu:(state, action)=>{
            state.resMenu = action.payload
        },
        setflag:(state, action)=>{
            state.flag = !state.flag
        },
        

    }
});

export const {addTopcusines, addTopreschains, addallres, addmenu, setflag, addfilteredsearch, addcity} = TopSlice.actions;

export default TopSlice.reducer;