import { createSlice } from '@reduxjs/toolkit';
import college1 from '../../assets/college1.jpg';
import college2 from '../../assets/college2.jpg';


const educationInfo = [
    {
        collegeName: 'Nalanda Institute Of Technology, Bhubaneswar',
        timeStamp: '2021-2024',
        specialization: 'Computer Science',
        img: college1,
        degree: 'B.TECH'
    },
    {
        collegeName: 'Government Polytechnic Bhubaneswar, Odisha',
        timeStamp: '2018-2021',
        specialization: 'Information Technology',
        img: college2,
        degree: 'Diploma'
    }
]


const educationSlice = createSlice({
    name: 'educationSlice',
    initialState: educationInfo,
    reducers: {

    }
})


export default educationSlice.reducer;
