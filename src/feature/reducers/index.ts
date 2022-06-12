import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './Auth/auth.slice';

export const rootReducer = combineReducers({
	auth: authSlice,
});
