import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  id: any;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

interface AuthState {
  profile: ProfileState | null;
  pending: boolean;
}

const initialState: AuthState = {
  profile: null,
  pending: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAuthState: (state, { payload }: PayloadAction<AuthState>) => {
      state.pending = payload.pending;
      state.profile = payload.profile;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAuthState } = authSlice.actions;

export default authSlice.reducer;
