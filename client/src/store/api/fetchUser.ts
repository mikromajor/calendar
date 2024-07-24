import { alcoActions } from "../reducer/alcoReducer";
import { AppDispatch } from "..";

// import axios from "axios";
import { AlcoState } from "../../types/alcoTypes";
import { appSlice } from "../reducer/appReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser =
//   () => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(appSlice.actions.fetching());
//       const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       dispatch(
//         userSlice.actions.usersFetchingSuccess(
//           response.data
//         )
//       );
//     } catch (e) {
//       dispatch(
//         userSlice.actions.usersFetchingError(e.message)
//       );
//     }
//   };

// export const fetchUsers = createAsyncThunk(
//   "user/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/user2s"
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(
//         "Не удалось загрузить пользователей"
//       );
//     }
//   }
// );
