import '../styles/displayCase.css'

function DisplayCase({title, description, img}) {
    return (
        <div className='display-case'>
            {!img.startsWith('data:image') ? <i className={`${img} fa-fw`} /> : <div className='display-case-img-wrapper'><img src={img} alt={title} className='display-case-img' /></div>}
            <span className='display-case-title'>{title}</span>
            <span className='display-case-description'>{description}</span>
        </div>
    )
}

export default DisplayCase