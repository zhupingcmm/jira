import { RootState } from "@src/store/index";

import { createSlice } from "@reduxjs/toolkit";

interface State {
  projectModelOpen: boolean;
}

export const initialState: State = {
  projectModelOpen: false,
};

export const projectListSlice = createSlice({
  name: "projectList",
  initialState,
  reducers: {
    openProjectModal(state: State) {
      state.projectModelOpen = true;
    },
    closeProjectModal(state: State) {
      state.projectModelOpen = false;
    },
  },
});

export const projectListActions = projectListSlice.actions;
export const projectState = (state: RootState) =>
  state.projectList.projectModelOpen;
