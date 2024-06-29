import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: '' };

export const popupScliceBd = createSlice({
    name: 'popupBd',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            return action.payload;
        },
        deletePopup: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updatePopup: (state, action) => {
            const updatedFormId = action.payload;
            return { ...state, formId: updatedFormId };
        },
        resetPopup: () => initialState
    }
});

export const { setPopup, deletePopup, appendPopup, resetPopup, updatePopup } = popupScliceBd.actions;

export default popupScliceBd.reducer;
