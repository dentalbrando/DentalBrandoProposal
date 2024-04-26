import { createSlice } from '@reduxjs/toolkit';

const initialState = {formId2: false};

export const pageSclice = createSlice({
    name: 'out',
    initialState,
    reducers: {
        setPage: (state, action) => {
            return action.payload;
        },
        deletePage: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updatePage: (state, action) => {
            const updatedFormId2 = action.payload;
            return { ...state, formId2: updatedFormId2 };
        },

        resetPage: () => initialState
    }
});

export const { setPage, deletePage, appendPage, resetPage, updatePage } = pageSclice.actions;

export default pageSclice.reducer;
