import React from 'react'

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