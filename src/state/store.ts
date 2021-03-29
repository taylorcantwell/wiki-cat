import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catReducer from '../state/catListSlice';

export const store = configureStore({
    reducer: {
        catList: catReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
