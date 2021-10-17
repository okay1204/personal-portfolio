import '../styles/notFound.css'
import LostMap from '../images/lostMap.png'

function NotFound() {
    return (
        <div className='notfound body'>
            <div className='notfound-text-section'>
                <h1>Looks like your lost...</h1>
                <h2>Perhaps you need a way out?</h2>
                <a href='/' className='notfound-button'>Go back home</a>
            </div>
            <div className='notfound-img-wrapper'>
                <img className='notfound-img' alt='Page not found' src={LostMap}/>
            </div>
        </div>
    )
}

export default NotFound