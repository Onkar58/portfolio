import React from 'react'
import SkillBtn from './SkillBtn'

const IndividualSkill = ({ skillName, skills }) => {
    return (
        <div className='flex flex-col md:flex-row items-start md:items-center gap-[20px]  justify-start md:gap-x-[10%] '>
            <h1 className='w-[300px] text-[25px]'>{skillName}</h1>
            <div className='flex gap-x-5 gap-y-5 flex-wrap justify-start flex-1'>
                {skills.map((skill, index) => {
                    return <SkillBtn name={skill.name} img={skill.svg} key={index} />
                })}
            </div>
        </div>
    )
}

export default IndividualSkill