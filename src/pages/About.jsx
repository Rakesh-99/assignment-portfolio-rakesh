import { useState } from 'react';
import AboutImg from '../assets/AboutImg.png';
import { useSelector } from 'react-redux';
import EducationCard from '../components/EducationCard';
import Skills from '../components/Skills';







const About = () => {

    const { educationSlice, skillSlice } = useSelector((state) => state);

    const [educationInfo, setEducationInfo] = useState(educationSlice);
    // const { } = useSelector((state) => state);
    const { theme } = useSelector((state) => state.themeToggle);












    return (
        <div className=" px-5 flex flex-col w-[75%] m-auto">

            <div className="heroImg w-full  flex justify-center py-5">
                <img src={AboutImg} alt="aboutImg" className=' md:w-1/2 lg:h-1/2 w-96 max-[500px]:w-56' />
            </div>

            <div className="into flex justify-center py-3">
                <h1 className=' text-2xl font-bold max-[500px]:text-sm'>Hi, <span className='bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent py-1 px-4 rounded-md max-[500px]:text-sm'>I’m Rakesh Kumar Parida.</span>Nice to meet you.</h1>
            </div>

            <div className="description flex leading-10 w-full justify-center flex-col items-center mt-5">
                <p className='  text-justify '>
                    I am a Mern Stack developer with a passion for creating beautiful and user-friendly websites. I have a strong understanding of front-end development and familiar with Backend technologies like Node,Express and MongoDB. Additionally, I have expertise in JWT Authentication and creating REST APIS with real time Database integration using MongoDB Atlas. I am experienced in deploying MERN Stack applications on platforms such as Vercel, Render and Netlify.

                    <br />

                    I am excited to put my skills to use in a professional setting. I am a quick learner and a team player, and I am confident that I can be a valuable asset to any web development team.
                    Thank You.
                </p>
            </div>

            {/* Education details  */}
            <hr className='my-10' />

            <h1 className='text-center md:text-8xl lg:text-8xl  text-2xl font-bold  bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent '>Education</h1>


            <div className=" grid-cols-1 grid md:grid-cols-2 min-h-80 lg:grid-cols-2 my-10 rounded-2xl">

                {

                    educationInfo && educationInfo.map((values, i) => {

                        return (

                            <div className=" mx-2" key={i}>
                                <EducationCard {...values} />
                            </div>
                        )

                    })
                }
            </div>


            {/* Skills  */}
            <h1 className=' text-center md:text-8xl lg:text-8xl  text-2xl font-bold  bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent '>Skills</h1>
            <div className="flex min-h-screen justify-center w-full">



                <div className=" grid my-10 lg:grid-cols-4  sm:grid-cols-1 md:grid-cols-4 gap-5 w-full ">
                    {
                        skillSlice.map((val, i) => {

                            return (
                                <div className={`border hover:shadow-2xl hover:animate-pulse hover:scale-95 duration-500 rounded-md cursor-pointer flex  flex-col justify-center items-center ${theme === 'dark' ? 'shadow-green-900 shadow-md hover:green-600 hover:shadow-green-500' : 'shadow-green-100 shadow-md hover:border-green-600 hover:shadow-green-500'} `} key={i}>

                                    <Skills  {...val} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>

    )
}

export default About