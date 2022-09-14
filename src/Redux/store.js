import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from './slice/userSlice';

const store = configureStore({
    reducer : {
        Users : userSlice
    }
})

export default store;