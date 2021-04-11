import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from './store';

interface CatList {
    catList: { name: string; id: string }[];
    searchTerm: string;
    loadedSearchList: null | boolean;
}

const initialState: CatList = {
    catList: [],
    searchTerm: '',
    loadedSearchList: null,
};

export const catSlice = createSlice({
    name: 'catList',
    initialState,
    reducers: {
        catList(state, action: PayloadAction<[]>) {
            state.catList = action.payload;
        },

        searchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },

        loadedSearchList(state, action: PayloadAction<boolean>) {
            state.loadedSearchList = action.payload;
        },
    },
});

export const { catList, searchTerm, loadedSearchList } = catSlice.actions;

export const fetchCatList = (): AppThunk => async (dispatch) => {
    const { data } = await axios.get('http://localhost:4000/search/');
    dispatch(catList(data));
    dispatch(loadedSearchList(true));
};

export default catSlice.reducer;
