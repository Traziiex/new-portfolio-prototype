import photo from './img/photo.jpg';
import {AiFillRead as Study} from 'react-icons/ai'
import {HiLocationMarker as Location} from 'react-icons/hi'

const Presentation = () => {
    return (
        <div className="content-container">
            <img src={photo} alt='Profile Picture' className="profile-img"></img>
            <div className='presentation-field-container'>
                <div className="presentation-field"><Study /><h3>Etudiant en Informatique</h3></div>
                <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
                <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
                <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
                <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
            </div>
        </div>
    )
}

export default Presentation
