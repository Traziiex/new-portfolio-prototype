import photo from './img/photo.jpg';
import {AiFillRead as Study, AiFillHeart as Heart, AiFillCaretDown as ArrowDown, AiOutlineRight as ArrowRight, AiOutlineRise as UpLift, AiOutlineClose as Cross} from 'react-icons/ai'
import { FaBirthdayCake as Cake } from "react-icons/fa";
import {HiLocationMarker as Location} from 'react-icons/hi'

import Media from 'react-media';

import {useState} from 'react';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';

const Presentation = () => {

    const [opened, setOpened] = useState(false);

    const pictureCardAnimX = {
        showCard: { x:0, pointerEvents: 'auto', rotateY:0 },
        hideCard: { x:"50%", rotateY:0}
    }
    const detailCardAnimX = {
        showCard: { x:0, pointerEvents: 'auto', rotateY:0 },
        hideCard: { x:"-50%", rotateY:0}
    }
    const pictureCardAnimY = {
        showCard: { y:0, pointerEvents: 'auto', rotateY:0 },
        hideCard: { y:"50%", rotateY:0}
    }
    const detailCardAnimY = {
        showCard: { y:0, pointerEvents: 'auto', rotateY:0 },
        hideCard: { y:"-50%", rotateY:0}
    }
    const pictureButtonAnim = {
        showCard: { opacity:1, pointerEvents:'auto', rotate:90*2},
        hideCard: { opacity:1, pointerEvent: 'auto', rotate:0}
    }
    const pictureButtonTransition={
        scale: {duration:0.1, ease:'easeInOut'},
        rotate: {duration:0.35, type: "spring", stiffness: 200 }
    }

    return (
    <div className="content-container">
        <Media queries={{small: "(max-width: 520px)", large: "(min-width: 521px)"}}>
        {matches => (
            <>
                {matches.small &&
                    <>
                        <motion.div className="profile-picture-container" initial={{y:"50%", rotateY:-90}} animate={opened ? 'showCard' : 'hideCard'} variants={pictureCardAnimY} transition={{ease:"easeInOut"}}>
                            <motion.div initial={{y:"-20%"}} animate={{y:"20%"}} transition={{repeat: Infinity, duration: 1, ease:"easeInOut", repeatType:'reverse'}}><ArrowDown /></motion.div>
                            <motion.img variants={pictureButtonAnim} initial='hideCard' animate={opened ? 'showCard' : 'hideCard'} onClick={() => setOpened(!opened)} whileHover={{scale:1.05}} transition={pictureButtonTransition} src={photo} alt='Profile Picture' className="profile-img"></motion.img>
                            <h2>DECOUVREZ QUI JE SUIS</h2>
                        </motion.div>
                        <motion.div className='presentation-field-container' initial={{y:"-50%", rotateY:-90}} animate={opened ? 'showCard' : 'hideCard'} variants={detailCardAnimY} transition={{ease:"easeInOut"}}>
                            <div className="presentation-field"><Study /><h3>Etudiant en Informatique</h3></div>
                            <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
                            <div className="presentation-field"><Cake /><h3>19 mars 2002</h3></div>
                            <div className="presentation-field"><Heart /><h3>Passioné d'Informatique</h3></div>
                            <div className="presentation-field"><h3>Ce que je souhaite :</h3><h3>Travailler, apprendre et m'améliorer</h3><UpLift /></div>
                            <motion.div initial={{scale:1}} whileHover={{scale:1.13}} className="presentation-field"><Link to="/mon-parcours"><motion.h2>En apprendre plus sur moi...</motion.h2><ArrowRight /></Link></motion.div>
                        </motion.div>
                    </> 
                }
                {matches.large && 
                    <>
                        <motion.div className="profile-picture-container" initial={{x:"50%", rotateY:-90}} animate={opened ? 'showCard' : 'hideCard'} variants={pictureCardAnimX} transition={{ease:"easeInOut"}}>
                            <motion.div initial={{y:"-20%"}} animate={{y:"20%"}} transition={{repeat: Infinity, duration: 1, ease:"easeInOut", repeatType:'reverse'}}><ArrowDown /></motion.div>
                            <motion.img variants={pictureButtonAnim} initial='hideCard' animate={opened ? 'showCard' : 'hideCard'} onClick={() => setOpened(!opened)} whileHover={{scale:1.05}} transition={pictureButtonTransition} src={photo} alt='Profile Picture' className="profile-img"></motion.img>
                            <h2>DECOUVREZ QUI JE SUIS</h2>
                        </motion.div>
                        <motion.div className='presentation-field-container' initial={{x:"-50%", rotateY:-90}} animate={opened ? 'showCard' : 'hideCard'} variants={detailCardAnimX} transition={{ease:"easeInOut"}}>
                            <div className="presentation-field"><Study /><h3>Etudiant en Informatique</h3></div>
                            <div className="presentation-field"><Location /><h3>IUT Lyon 1</h3></div>
                            <div className="presentation-field"><Cake /><h3>19 mars 2002</h3></div>
                            <div className="presentation-field"><Heart /><h3>Passioné d'Informatique</h3></div>
                            <div className="presentation-field"><h3>Ce que je souhaite :</h3><h3>Travailler, apprendre et m'améliorer</h3><UpLift /></div>
                            <motion.div initial={{scale:1}} whileHover={{scale:1.13}} className="presentation-field"><Link to="/mon-parcours"><motion.h2>En apprendre plus sur moi...</motion.h2><ArrowRight /></Link></motion.div>
                        </motion.div>
                    </>
                }
            </>
        )}
        </Media>
    </div>
    )
}

export default Presentation
