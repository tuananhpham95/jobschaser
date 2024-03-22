import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";
const initialState = {
  jobs: data,
  searchTerm: "",
  employmentType: "All",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    searchJobs(state, action) {
      state.searchTerm = action.payload;
    },
    setEmploymentType(state, action) {
      state.employmentType = action.payload;
    },
  },
});

export const { searchJobs, setEmploymentType } = jobsSlice.actions;
export default jobsSlice.reducer;
