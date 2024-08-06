import { createSlice } from "@reduxjs/toolkit";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";


const initialState = [
    {
        skillName: 'Core Java',
        icon: FaJava,
    },
    {
        skillName: 'JavaScript',
        icon: SiJavascript,

    },
    {
        skillName: 'React Js',
        icon: IoLogoReact,

    },
    {
        skillName: 'Tailwind Css',
        icon: RiTailwindCssLine,

    },
    {
        skillName: 'MongoDB',
        icon: SiMongodb,

    },
    {
        skillName: 'Node Js',
        icon: FaNode,

    },
    {
        skillName: 'Express Js',
        icon: SiExpress,

    },
    {
        skillName: 'Git',
        icon: FaGitAlt,

    },
    {
        skillName: 'CSS3',
        icon: FaGitAlt,

    },
    {
        skillName: 'Git',
        icon: FaCss3Alt,

    },
    {
        skillName: 'HTML5',
        icon: TiHtml5,

    },
]




const skillSlice = createSlice({
    name: 'skillSlice',
    initialState,
    reducers: {

    }
});



export default skillSlice.reducer;