import React, { useState, useRef, useEffect } from 'react'
import contactImg from '../assets/contactImg.png';
import { BiPhoneCall } from "react-icons/bi";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {


    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [submit, isSetSubmit] = useState(false);



    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const formSubmitHandle = (e) => {
        e.preventDefault();
        validateFormData(formData);
        isSetSubmit(true);
    }


    // Form Validation 


    const validateFormData = (formValues) => {

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        const { user_name, user_email, message } = formValues;

        if (!user_name) {
            toast.error('*user_name is required');
            false;
        } else if (user_name.length < 2) {
            toast.error('*user_name can not be less than 2 char!');
            false;
        } else if (user_name.length > 20) {
            toast.err('*user_name can not contain more than 20 char');
            return false
        };

        // user_user_email validation : 
        if (!user_email) {
            toast.error('*user_email field is required!');
            return;

        } else if (!regex.test(user_email)) {
            toast.error('*Invalid user_user_email entered');
            return
        };

        // message validation :

        if (!message) {
            toast.error('*message field is required');
            return false;
        } else if (message.length < 20) {
            toast.error('*message field can not be less than 10 char');
            return;
        } else if (message.length > 300) {
            toast.error('*message field can not contain more than 300 char');
            return;
        };


        // Sending Mail : 

        if (isSetSubmit) {
            emailjs
                .sendForm('service_todl9jn', 'template_z8038t7', form.current, {
                    publicKey: '9jviJgR96VWp7lXjf',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success('Your message has been sent');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        toast.error('An unexpected error occurred!')
                    },
                );

            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            })
        }
    }








    const { theme } = useSelector((state) => state.themeToggle)

    return (
        <>
            <div className="min-h-screen lg:flex-row md:flex-row flex-col  items-center justify-center md:w-[75%] m-auto flex  gap-5 ">


                <div className="w-[400px] lg:w-1/2 md:w-1/2">
                    <img src={contactImg} className='w-full' alt="contactImg" />
                </div>

                <form
                    ref={form}
                    onSubmit={formSubmitHandle}
                    className={`flex flex-col gap-4 duration-1000 justify-center lg:w-1/2 md:w-1/2 w-full border rounded-md py-4 px-4 shadow-xl  items-center ${theme === 'dark' ? ' border-zinc-700 hover:border-orange-400 border' : 'hover:border-orange-300'}`}>

                    <div className="flex items-center  w-full gap-2">
                        <BiPhoneCall
                            size={26}
                            color='orange' />
                        <h1 className='text-2xl font-semibold  bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 inline-block text-transparent'>Contact</h1>
                    </div>

                    <div className=" flex flex-col  ">
                        <label className='text-sm font-semibold'>Name</label>
                        <input
                            autoComplete='off'
                            name='user_name'
                            onChange={inputChangeHandle}
                            type="text"
                            placeholder='Enter user_name..'
                            className={`py-2 border-orange-500 transition-all duration-500 px-3 rounded-sm w-72 lg:w-96 md:w-96 outline-none ${theme === 'dark' ? 'bg-zinc-700 text-white focus:bg-gray-800' : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '}`}
                        />
                    </div>

                    <div className=" flex flex-col">
                        <label className='text-sm font-semibold'>Email</label>
                        <input
                            autoComplete='off'
                            name='user_email'
                            onChange={inputChangeHandle}
                            type="user_email" placeholder='Enter user_name..'
                            className={`py-2 transition-all duration-500 px-3 rounded-sm w-72 lg:w-96 md:w-96 outline-none ${theme === 'dark' ? 'bg-zinc-700 text-white focus:bg-gray-800' : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '}`} />
                    </div>

                    <div className=" flex flex-col">

                        <label className='text-sm font-semibold'>Message</label>
                        <textarea
                            autoComplete='off'
                            placeholder='Enter your message..'
                            onChange={inputChangeHandle}
                            name="message"
                            className={`py-2 px-3 transition-all duration-500 rounded-sm w-72 lg:w-96 md:w-96 outline-none ${theme === 'dark' ? 'bg-zinc-700 text-white focus:bg-gray-800' : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '} `} />

                    </div>


                    <button
                        type='submit'
                        value='send'
                        className='bg-gradient-to-r hover:shadow-orange-600 shadow-2xl transition-all duration-500   from-red-500 to-orange-500 py-2 text-gray-300 text-sm font-semibold px-10 rounded-sm active:scale-95 '>
                        Send message
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact