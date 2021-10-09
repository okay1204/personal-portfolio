import '../styles/projectCase.css'

function ProjectCase({title, href, skill, description, img, date}) {
    return (
        <a className='project-case' href={href} rel='alternate'>
            <div className='project-case-img-wrapper'>
                <img className='project-case-img' src={img}/>
            </div>
            <div className='project-case-text'>
                <span className='project-case-skill'>{skill}</span>
                <span className='project-case-title'>{title}</span>
                <span className='project-case-description'>{description}</span>
                <span className='project-case-date'>{date}</span>
            </div>
        </a>
    )
}

export default ProjectCase