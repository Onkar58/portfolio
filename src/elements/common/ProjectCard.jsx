import React from 'react'
import { BiLink, BiCodeAlt } from 'react-icons/bi'

const ProjectCard = ({ img, title, stack, link, code, description }) => {
    return (
        <div
            className='w-[300px] flex flex-col flex-shrink-0 p-2 gap-[20px] 
                     bg-background-light text-text-color rounded-lg cursor-pointer shadow-lg 
                     dark:bg-dark-background-light dark:text-dark-text-color dark:shadow-none'
        >
            <img src={img} alt={title} className='w-full rounded-lg' />
            <div className='flex flex-col gap-2 w-full justify-between'>
                <h1 className='text-[25px] flex gap-2'>
                    {title}
                    <BiLink className='opacity-50' onClick={() => window.open(link, "_blank")} />
                    <BiCodeAlt className='opacity-50' onClick={() => window.open(code, "_blank")} />
                </h1>
                <h3 className='text-[18px] opacity-50'>{stack}</h3>
                <p className='mt-2 opacity-70'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard