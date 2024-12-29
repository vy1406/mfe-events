import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    dispatchEvent: (state, action) => {
      state.events.push(action.payload);
      window.alert(action.payload.message + ' | ' + action.payload.remote);
      console.log('Event received:', action.payload);
    },
  },
});

const { dispatchEvent } = globalSlice.actions;

export default {
  reducer: globalSlice.reducer,
  dispatchEvent,
};