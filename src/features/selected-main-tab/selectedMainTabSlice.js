import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'TREND',
}

export const selectedMainTabSlice = createSlice({
  name: 'selectedMainTab',
  initialState,
  reducers: {
    setSelectedMainTab: (state, { payload }) => {
      state.value = payload.newTab
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedMainTab } = selectedMainTabSlice.actions

export default selectedMainTabSlice.reducer
