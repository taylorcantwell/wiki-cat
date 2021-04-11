import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';

interface List {
    id: string;
    image: string;
    visits: number;
    name: string;
}
interface InitialState {
    list: List[] | null;
    loadedTopBreedsList: boolean;
}

const initialState: InitialState = {
    list: null,
    loadedTopBreedsList: false,
};

export const visitSlice = createSlice({
    name: 'visitList',
    initialState,
    reducers: {
        topFourBreeds(state, action: PayloadAction<[]>) {
            state.list = action.payload;
        },
        loadedTopBreedsList(state, action: PayloadAction<boolean>) {
            state.loadedTopBreedsList = action.payload;
        },
    },
});

export default visitSlice.reducer;

export const { topFourBreeds, loadedTopBreedsList } = visitSlice.actions;

export const fetchTopFour = (): AppThunk => async (dispatch) => {
    const { data } = await axios.get('http://localhost:4000/visits');
    dispatch(topFourBreeds(data));
    dispatch(loadedTopBreedsList(true));
};
