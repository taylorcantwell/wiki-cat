import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import catReducer from '../state/catListSlice';
import profileReducer from '../state/profileSlice';
import visitsReducer from '../state/visitsSlice';

export const store = configureStore({
    reducer: {
        catList: catReducer,
        profileInformation: profileReducer,
        visitList: visitsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
