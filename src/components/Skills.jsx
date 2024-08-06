import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";


const Skills = (val) => {


    
    const { skillName, icon: Icon } = val;



    return (
        <>
            <div className="flex flex-col items-center">

                {Icon && <Icon size={100} />}

                <p className=' text-lg bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent'>{skillName}</p>
            </div>
        </>
    )
}

export default Skills