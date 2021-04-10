import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from './store';

interface ProfileInformation {
    profileInformation: {
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
    };

    loading: boolean | null;
}

const initialState: ProfileInformation = {
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

    loading: null,
};

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        profileInformation: (
            state,
            action: PayloadAction<ProfileInformation>
        ) => {
            //@ts-ignore
            state.profileInformation = action.payload;
        },
        profileLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { profileInformation, profileLoading } = profileSlice.actions;

export const fetchCatProfileInformation = (id: string): AppThunk => async (
    dispatch
) => {
    dispatch(profileLoading(true));
    const { data } = await axios.get(`http://localhost:4000/breed/${id}`);
    dispatch(profileInformation(data));
    dispatch(profileLoading(false));
};

// export const selectprofileSlice = (state: RootState) => state.catList.catList;
// export const selectSearchTerm = (state: RootState) => state.catList.searchTerm;

export default profileSlice.reducer;
