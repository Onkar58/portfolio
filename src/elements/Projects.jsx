import React from 'react'
import projects from './info/projects'
import ProjectCard from './common/ProjectCard'

const Projects = () => {
    return (
        <div className='p-5 md:p-20' id='projects'>
            <h1 className='my-5 text-[40px]'>Projects</h1>
            <div className='projects w-full h-auto flex flex-col md:p-5 md:flex-row md:overflow-x-auto md:overflow-y-visible gap-20'>
                    {projects.map((project, idx) => (
                        <ProjectCard {...project} key={idx} />
                    ))}
            </div>
        </div>
    )
}

export default Projects