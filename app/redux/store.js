import { configureStore, createSlice } from '@reduxjs/toolkit';

// Arka plan slice'ı
const backgroundSlice = createSlice({
  name: 'background',
  initialState: { color: '#ffffff', buttonColor: '#0070f3', buttonTextColor: '#ffffff' },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.color = action.payload;
    },
    setButtonColor: (state, action) => {
      state.buttonColor = action.payload;
    },
    setButtonTextColor: (state, action) => {
      state.buttonTextColor = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    background: backgroundSlice.reducer,
  },
});

// Export edilen action ve store
export const { setBackgroundColor, setButtonColor, setButtonTextColor } = backgroundSlice.actions;
export default store;
