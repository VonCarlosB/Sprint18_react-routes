import { studies, experiences } from '../data/resume'

export default function Resume() {
    return (
        <>
            <h2>Resume</h2>
            <ul>
                <h3>Studies</h3>
                {studies.map(study => {
                    return (
                    <li key={study.id}>
                        <h4>Título: {study.title}</h4>
                        <p>Institución: {study.institution}</p>
                        <p>Duración: {study.date}</p>
                    </li>)
                })}
            </ul>
            <br/>
            <ul>
                <h3>Experiencies</h3>
                {experiences.map(experiencie => {
                    return (
                    <li key={experiencie.id}>
                        <h4>Título: {experiencie.title}</h4>
                        <p>Compañía: {experiencie.company}</p>
                        <p>Duración: {experiencie.date}</p>
                    </li>)
                })}
            </ul>
        </>
    )
}