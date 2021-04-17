import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './store';

interface ProfileInformation {
    id: string;
    name: string;
    description: string;
    image: string;
    images: string[];
    origin: string;
    temperament: string;
    lifeSpan: string | null;
    adaptability: number | null;
    affectionLevel: number | null;
    childFriendly: number | null;
    grooming: number | null;
    intelligence: number | null;
    healthIssues: number | null;
    socialNeeds: number | null;
    strangerFriendly: number | null;
}

interface InitialState {
    profileInformation: ProfileInformation;
    profileLoading: boolean | null;
}

const initialState: InitialState = {
    profileInformation: {
        id: '',
        name: '',
        description: '',
        image: '',
        images: [],
        origin: '',
        temperament: '',
        lifeSpan: null,
        adaptability: null,
        affectionLevel: null,
        childFriendly: null,
        grooming: null,
        intelligence: null,
        healthIssues: null,
        socialNeeds: null,
        strangerFriendly: null,
    },

    profileLoading: null,
};

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        profileInformation(state, action: PayloadAction<ProfileInformation>) {
            state.profileInformation = action.payload;
        },

        profileLoading(state, action: PayloadAction<boolean>) {
            state.profileLoading = action.payload;
        },
    },
});

export const { profileInformation, profileLoading } = profileSlice.actions;

export const fetchCatProfileInformation = (
    id: string,
    history: any
): AppThunk => async (dispatch) => {
    try {
        dispatch(profileLoading(true));
        const { data } = await axios.get(
            `https://wiki-cat.herokuapp.com/breed/${id}`
        );
        dispatch(profileInformation(data));
        dispatch(profileLoading(false));
    } catch (err) {
        history.push({
            pathname: '/404',
        });
    }
};

export default profileSlice.reducer;
