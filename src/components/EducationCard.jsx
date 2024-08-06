import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { useSelector } from 'react-redux';




const EducationCard = (values) => {






    const { theme } = useSelector((state) => state.themeToggle)



    return (
        <>
            <div className={`flex -z-10 border rounded-md flex-col  shadow-md py-2 transition-all duration-700  gap-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>

                <div className="flex justify-center">
                    <h1 className='text-lg  font-semibold'>{values?.collegeName}</h1>
                </div>

                <div className="flex gap-1 justify-center items-center">
                    <FaLaptopCode />
                    <p className='text-sm '>Specialization : {values?.specialization}</p>
                </div>

                <div className="mx-5  relative">
                    <img src={values?.img} alt="clgImg" className='w-full  h-32 -z-10 object-cover rounded-md' />

                    <h1 className='text-xl'></h1>
                    <div className="shadow-2xl  absolute top-0 rounded-md  w-full h-32 bg-gradient-to-t from-zinc-900 from-1% to-transparent to-40%">
                    </div>
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