import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptState:false,
        movieResults:null,
        movieNames:null,
        lang:"en",
    },
    reducers:{
        toggleGptState:(state)=>{
            state.gptState=!state.gptState;
        },
        toggleLang:(state,action)=>{
            state.lang=action.payload;
        },
        addGptMovies:(state,action)=>{
            const {movieResults,movieNames}=action.payload;
            state.movieResults=movieResults;
            state.movieNames=movieNames;
        }
    },
});
export const{toggleGptState,toggleLang,addGptMovies} =gptSlice.actions;
export default gptSlice.reducer;