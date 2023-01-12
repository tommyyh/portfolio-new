import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    value: {
      contactOpen: false,
    },
  },
  reducers: {
    setContactOpen: (state, data) => {
      state.value.contactOpen = data;
    },
  },
});

export const { setContactOpen } = stateSlice.actions;

export default stateSlice.reducer;
