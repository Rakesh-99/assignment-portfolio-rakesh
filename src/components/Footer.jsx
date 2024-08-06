import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Footer = () => {


    const footerLinks = [
        {
            link: 'https://github.com/Rakesh-99',
            icon: FaGithub

        },
        {
            link: 'https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/',
            icon: FaLinkedin
        },
        {
            link: 'https://www.instagram.com/_rakesh_ku_parida/',
            icon: FaInstagram
        },
        {
            link: 'https://x.com/kumar_pari23020',
            icon: FaTwitter
        },

    ]

    return (
        <>
            <div className="h-32  flex items-center  justify-around  shadow-2xl">
                <div className="flex md:gap-20 lg:gap-20 gap-5">
                    {
                        footerLinks.map((val, i) => {
                            const { link, icon: Icon } = val;
                            return (
                                <div className="flex rounded-full items-center hover:scale-90 hover:shadow-2xl hover:shadow-green-500 py-4 px-4 transition-all" key={i}>
                                    <Link target='_blank' className='' to={`${link}`}><Icon size={30} /></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Footer