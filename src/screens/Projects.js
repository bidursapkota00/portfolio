import React from 'react'
import Categories from '../components/Categories'
import MenuItem from '../components/MenuItem'
import '../styles/Projects.css'
import projects from '../components/Projects'
import { useState } from 'react'

const allCategories = ['All', ...new Set(projects.map(item => item.category))]

function Projects() {
    const [categories, setCategories] = useState(allCategories)
    const [menu, setMenu] = useState(projects)

    const filter = category => {
        if(category === 'All'){
            setMenu(projects)
            return
        }
        const filteredData = projects.filter(item => {
            return item.category === category
        })
        setMenu(filteredData)
    }
    
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
                    <Categories filter={filter} categories={categories}/>
                    <MenuItem menu={menu}/>
                </div>
            </div>
        </div>
    )
}

export default Projects
