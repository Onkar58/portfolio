import React from 'react'
import skills from './info/skills'
import IndividualSkill from './common/IndividualSkill'

const Skills = () => {
    return (
        <div className='px-5 md:px-20' id='skills'>
            <h1 className='my-5 text-[40px]'>Skills</h1>
            <div className='flex flex-col gap-20 md:gap-10'>
                    {skills.map((skill, index) => {
                        return <IndividualSkill skillName={skill.skillName} skills={skill.skills} key={index} />
                    })}
            </div>
        </div>
    )
}

export default Skills