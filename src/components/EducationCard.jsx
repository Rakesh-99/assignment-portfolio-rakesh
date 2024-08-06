import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { useSelector } from 'react-redux';




const EducationCard = (values) => {






    const { theme } = useSelector((state) => state.themeToggle)



    return (
        <>
            <div className={`flex shadow-2xl border rounded-md flex-col hover:-translate-y-1 py-2 transition-all duration-300  gap-2 ${theme === 'dark' ? 'border-gray-700 hover:shadow-green-800 ' : 'border-gray-300 hover:shadow-green-400 '}`}>

                <div className="flex justify-center">
                    <h1 className='text-lg  font-semibold'>{values?.collegeName}</h1>
                </div>

                <div className="flex gap-1 justify-center items-center">
                    <FaLaptopCode />
                    <p className='text-sm '>Specialization : {values?.specialization}</p>
                </div>

                <div className="mx-5 shadow-xl">
                    <img src={values?.img} alt="clgImg" className='w-full  h-32 -z-10 object-cover rounded-md' />
                </div>

                <div className="text-end mr-3">
                    <p className=' text-2xl font-bold'>{values.timeStamp}</p>
                    <p className='border-b text-sm'>{values?.degree}</p>
                </div>
            </div>

        </>
    )
}

export default EducationCard