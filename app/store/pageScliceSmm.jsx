import { createSlice } from '@reduxjs/toolkit';

const initialState = {formId: 1};

export const pageScliceSmm = createSlice({
    name: 'pageSmm',
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
            const updatedFormId = action.payload;
            return { ...state, formId: updatedFormId };
        },

        resetPage: () => initialState
    }
});

export const { setPage, deletePage, appendPage, resetPage, updatePage } = pageScliceSmm.actions;

export default pageScliceSmm.reducer;
