import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import authService from '../services/auth';

const user = JSON.parse(localStorage.getItem('user'));
const tokens = JSON.parse(localStorage.getItem('tokens'));

const initialState = user && tokens ? { isLoggedIn: true, user, tokens } : { isLoggedIn: false, user: null, tokens: null };

export const register = createAsyncThunk('auth/register', async ({ name, email, password, tz }, thunkAPI) => {
  try {
    const response = await authService.register(name, email, password, tz);
    toast(`Your account was created, ${name} 🎉\n\nLogin to get started!`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue();
  }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await authService.login(email, password);
    return { user: response.user, tokens: response.tokens };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue();
  }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async ({ refreshToken }, thunkAPI) => {
  try {
    const response = await authService.refreshTokens(refreshToken);
    return { tokens: response.tokens };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk('auth/logout', async ({ refreshToken }, thunkAPI) => {
  try {
    await authService.logout(refreshToken);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    toast.error(message);
    return thunkAPI.rejectWithValue();
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.tokens = null;
    },
    [login.fulfilled]: (state, action) => {
      state.tokens = action.payload.tokens;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.tokens = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
