import { createSlice } from '@reduxjs/toolkit';
import { booksData } from '../data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: booksData,
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push({ ...action.payload, id: Date.now() });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
