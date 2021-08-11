import '../styles/displayCase.css'

function DisplayCase({title, description, img}) {
    return (
        <div className='display-case'>
            <img src={img} alt={title} />
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
}

export default DisplayCase