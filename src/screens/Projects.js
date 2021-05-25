import React from 'react'
import Categories from '../components/Categories'
import MenuItem from '../components/MenuItem'
import '../styles/Projects.css'
import projects from '../components/Projects'
import { useState } from 'react'

function Projects() {
    const [Categories, setCategories] = useState(null)
    const [Menu, setMenu] = useState(projects)
    return (
        <div className='Projects'>
            <div className="projects-container">
                <div className='Title'>
                    <h3>
                        Projects
                        <span>Projects</span>
                    </h3>
                </div>
                <div className="project">
                    <Categories/>
                    <MenuItem menu={Menu}/>
                </div>
            </div>
        </div>
    )
}

export default Projects
