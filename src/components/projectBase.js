function ProjectBase({children}) {
    return (
        <div className='project-page'>
            <a href='/'><i className="fas fa-arrow-left project-page-back-arrow" /></a>
            {children}
        </div>
    )
}

export default ProjectBase