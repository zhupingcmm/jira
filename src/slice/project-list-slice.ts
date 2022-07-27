import { RootState } from "@src/store/index";

import { createSlice } from "@reduxjs/toolkit";

interface State {
  projectModelOpen?: boolean;
  status: "edit" | "create";
}

interface Action {
  type?: string;
  payload: State;
}

export const initialState: State = {
  projectModelOpen: false,
  status: "create",
};

export const projectListSlice = createSlice({
  name: "projectList",
  initialState,
  reducers: {
    openProjectModal(state: State, action: Action) {
      state.projectModelOpen = true;
      state.status = action.payload.status;
    },
    closeProjectModal(state: State) {
      state.projectModelOpen = false;
    },
  },
});

export const projectListActions = projectListSlice.actions;
export const projectState = (state: RootState) => state.projectList;
