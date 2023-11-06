import { createSlice } from '@reduxjs/toolkit';

const selectednumber = createSlice({
    name: 'selectNum',
    initialState:1,
    reducers: {
    setNumber: (state, action) => {
    return state = action.payload;
    },
    incrment: (state, _action) => {
    return state + 1 ;
    },
    dicrment: (state, _action) => {
    return state > 0 ? state - 1 : state
    },

}
});

export const { setNumber , incrment , dicrment } = selectednumber.actions;
export default selectednumber.reducer;