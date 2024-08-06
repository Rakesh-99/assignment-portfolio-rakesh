import { createSlice } from '@reduxjs/toolkit';
import nitClg from '../../assets/collegeImage.jpg';
import polytechnic from '../../assets/polytechnicImg.jpg';


const educationInfo = [
    {
        collegeName: 'Nalanda Institute Of Technology, Bhubaneswar',
        timeStamp: '2021-2024',
        specialization: 'Computer Science',
        img: nitClg,
        degree: 'B.TECH'
    },
    {
        collegeName: 'Government Polytechnic Bhubaneswar, Odisha',
        timeStamp: '2018-2021',
        specialization: 'Information Technology',
        img: polytechnic,
        degree : 'Diploma Engg..'
    }
]


const educationSlice = createSlice({
    name: 'educationSlice',
    initialState: educationInfo,
    reducers: {

    }
})


export default educationSlice.reducer;
