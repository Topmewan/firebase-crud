import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
	currentUser?: any;
	isLoading: boolean;
}
const initialState: AuthState = {
	currentUser: undefined,
	isLoading: false,
};

const authSlice = createSlice({
	name: '@@auth',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
