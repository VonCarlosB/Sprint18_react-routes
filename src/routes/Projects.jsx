import projects from '../data/projects'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>
        <h2>Projects</h2>
        <ul>
            {projects.map(project => {
                return(
                    <li key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt ="ProjectImage"/>
                        <Link to={project.url}>Ver más...</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}