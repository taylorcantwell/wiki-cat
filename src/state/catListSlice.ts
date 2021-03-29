import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from './store';

interface CatList {
    catList: { name: string; id: string }[];
    searchTerm: string;
}

const initialState: CatList = {
    catList: [],
    searchTerm: '',
};

export const catSlice = createSlice({
    name: 'catList',
    initialState,
    reducers: {
        catList: (state, action: PayloadAction<[]>) => {
            state.catList = action.payload;
        },
        searchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { catList, searchTerm } = catSlice.actions;

export const fetchCatList = (): AppThunk => async (dispatch) => {
    const data = await axios.get('http://localhost:4000/search/');
    const catData = data.data;
    dispatch(catList(catData));
};

export const selectCatList = (state: RootState) => state.catList.catList;
export const selectSearchTerm = (state: RootState) => state.catList.searchTerm;

export default catSlice.reducer;
