import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

// Load user from localStorage
const userFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const res = await api.post('/login', { email, password });
        // Store token in localStorage
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
        }
        return res.data.user;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
});

export const signup = createAsyncThunk('user/signup', async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const res = await api.post('/register', { name, email, password });
        // Store token in localStorage
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
        }
        return res.data.user;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
});

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
    try {
        await api.get('/logout');
        // Remove token from localStorage
        localStorage.removeItem('token');
        return null;
    } catch (err) {
        return rejectWithValue('Logout failed');
    }
});

export const getProfile = createAsyncThunk('user/getProfile', async (_, { rejectWithValue }) => {
    try {
        const res = await api.get('/myprofile');
        return res.data.user;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch profile');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: userFromStorage,
        loading: false,
        error: null,
    },
    reducers: {
        setUser(state, action) {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        logout(state) {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.userInfo = null;
                localStorage.removeItem('userInfo');
            })
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer; 