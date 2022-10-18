import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://yalantis-react-school-api.yalantis.com/api/task0";

export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async () => {
  const response = await axios.get("/users");
  return response.data;
});