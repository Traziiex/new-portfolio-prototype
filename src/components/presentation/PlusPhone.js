import React from 'react'
import Code from '../code/Code';
import Media from 'react-media';
import {motion} from 'framer-motion';
import Moi from './img/Moi.png';
import ImgMoiZoom from './ImgMoiZoom'
import {useState} from 'react';

const PlusPhone = () => {

    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    

    const [zoom, setZoom] = useState(false);
    const closeZoom = () =>{
        setZoom(!zoom);
    }

    const cardVariant = {
        open: { rotateX:0, opacity: 1, height: "70vh" },
        collapsed: {  rotateX:0, opacity: 1, height: "63px" }
    
    }
    return (
        <>
        {zoom ? <ImgMoiZoom close={closeZoom}/> : null}
        <div className="plus-content">
            <motion.div initial={{rotateX:"-90deg", height:"40px"}} animate={card1 ? "open" : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Qui suis-je ?</h2>
                <div onClick={() => setCard1(!card1)} style={{cursor:"pointer"}}>{card1 ? "Voir moins" : "Voir plus"}</div>
                <p>Je suis Noah Blanchard, un étudiant en informatique plein d'ambitions. Depuis tout petit, je porte un fort intérêt pour tout ce qui touche à l'informatique
                    et particulèrement les ordinateurs. Ces machines me fascinent depuis tout petit : j'ai vite été attiré par l'aspect vidéo-ludique proposée sur les
                    ordinateurs.
                </p>
            </motion.div >
            <motion.div initial={{rotateX:"-90deg", height:"40px"}} animate={card2 ? "open" : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Mes passe-temps</h2>
                <div onClick={() => setCard2(!card2)} style={{cursor:"pointer"}}>{card2 ? "Voir moins" : "Voir plus"}</div>
            </motion.div>
            <motion.div initial={{rotateX:"-90deg", height:"40px"}} animate={card3 ? "open" : "collapsed"} transition={{duration:0.3}} variants={cardVariant}>
                <h2>Ma personnalité en carte mentale</h2>
                <div onClick={() => setCard3(!card3)} style={{cursor:"pointer"}}>{card3 ? "Voir moins" : "Voir plus"}</div>
                <img src={Moi} onClick={() => setZoom(!zoom)}/>
            </motion.div>
        </div>
        </>
    )
}

export default PlusPhone
