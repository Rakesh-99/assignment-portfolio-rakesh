import React from 'react'
import portfolioImg from '../assets/hero2.png';
import { useSelector } from 'react-redux';


const Portfolio = () => {


    const { theme } = useSelector((state) => state.themeToggle);

    const portfolioInfo = [
        {
            title: '10 things to know about Azure static web Apps',
            content: 'Collaboration to create a bigineer friendly article to help  explain azure static Web apps and tooling  to get started.'
        },
        {
            title: 'Web development foe begineers',
            content: 'The best first step to becoming a Web Developer is to start learning web development fundamentals'
        },
        {
            title: 'My resume site',
            content: 'My Perfect Resume advertises a free plan, but it only includes access to TXT resume files. For any other features or file formats.'
        },
        {
            title: 'Github codespace and github.dev',
            content: 'A codespace is a development environment thats hosted in the cloud.Customize your project for GitHub Codespaces by configuring dev container files to your'
        }
    ]









    return (
        <>
            <div className="text-center my-10">
                <h1 className=' text-6xl bg-clip-text bg-gradient-to-r from-green-600 via-cyan-700 to-indigo-500 inline-block text-transparent font-semibold'>Portfolio</h1>
            </div>


            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:pr-10 py-2  lg:pr-10 items-center gap-5     ">
                {/* left content  */}
                <div className=" w-full justify-center flex">
                    <img src={portfolioImg} alt="portfolioImg" className=' w-[350px] lg:w-[400px] md:w-[450px]' />
                </div>


                {/* Right content  */}

                <div className="grid h-full gap-5 lg:grid-cols-2 grid-cols-1 px-5 md:grid-cols-2">
                    {
                        portfolioInfo.map((val, i) => {
                            const { title, content } = val;
                            return (
                                <div className={`border shadow-md  duration-1000  rounded-md py-2 flex flex-col gap-5 px-2 ${theme === 'dark' ? 'border-gray-600  shadow-cyan-950' : 'border-gray-300 shadow-cyan-200'}`} key={i}>
                                    <h1 className=' text-xl text-cyan-500 font-semibold'>{title}</h1>
                                    <p className='text-start font-thin text-sm'>{content}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Portfolio