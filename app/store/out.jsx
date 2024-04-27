import { createSlice } from '@reduxjs/toolkit';

const initialState = {formId2: false};

export const pageSclice = createSlice({
    name: 'out',
    initialState,
    reducers: {
        setPage2: (state, action) => {
            return action.payload;
        },
        deletePage: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updatePage2: (state, action) => {
            const updatedFormId2 = action.payload;
            return { ...state, formId2: updatedFormId2 };
        },

        resetPage: () => initialState
    }
});

export const { setPage, deletePage, appendPage, resetPage, updatePage } = pageSclice.actions;

export default pageSclice.reducer;
