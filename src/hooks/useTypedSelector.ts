import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';
import { RootState } from '../state/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = _useSelector;
