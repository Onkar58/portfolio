import React from 'react'

const SkillBtn = ({ name, img }) => {
    return (
        <div
            className='flex items-center gap-1 border-[3px] px-2 py-1 rounded-[10px] min-w-[100px]
            bg-background-light border-background-light shadow-md shadow-[#aaa] cursor-pointer
            hover:scale-[110%] transition
            dark:bg-dark-background dark:text-dark-text-color dark:border-dark-text-color dark:shadow-none
    '>
            {img}
            {name}
        </div>
    )
}

export default SkillBtn