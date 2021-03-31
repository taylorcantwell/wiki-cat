import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catReducer from '../state/catListSlice';
import profileReducer from '../state/profileSlice';

export const store = configureStore({
    reducer: {
        catList: catReducer,
        profileInformation: profileReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
