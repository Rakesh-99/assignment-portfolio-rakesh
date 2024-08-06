import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeSlice from '../slice/ThemeSlice';
import educationSlice from '../slice/EducationSlice';
import skillSlice from '../slice/skillSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';




const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducers = combineReducers({
    themeToggle: themeSlice,
    educationSlice: educationSlice,
    skillSlice: skillSlice
});

const persistedReducers = persistReducer(persistConfig, reducers);






const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;