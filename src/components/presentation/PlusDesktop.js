import React from 'react'
import Code from '../code/Code';
import Media from 'react-media';
import {motion} from 'framer-motion';
import Moi from './img/Moi.png';
import ImgMoiZoom from './ImgMoiZoom'
import {useState} from 'react';

const PlusDesktop = () => {

    const [zoom, setZoom] = useState(false);
    const closeZoom = () =>{
        setZoom(!zoom);
    }

    return (
        <>
        {zoom ? <ImgMoiZoom close={closeZoom}/> : null}
        <div className="plus-content">
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100}}>
                <h2>Qui suis-je ?</h2>
                <p>Je suis Noah Blanchard, un étudiant en informatique plein d'ambitions. Depuis tout petit, je porte un fort intérêt pour tout ce qui touche à l'informatique
                    et particulèrement les ordinateurs. Ces machines me fascinent depuis tout petit : j'ai vite été attiré par l'aspect vidéo-ludique proposée sur les
                    ordinateurs.
                </p>
            </motion.div >
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100, delay:0.2}}>
                <h2>Mes passe-temps</h2>
            </motion.div>
            <motion.div initial={{rotateX:"-90deg", opacity:0}} animate={{rotateX:0, opacity:1}} transition={{duration:0.3, type: "spring", stiffness: 100, delay:0.4}}>
                <h2>Ma personnalité en carte mentale</h2>
                <img src={Moi} onClick={() => setZoom(!zoom)}/>
            </motion.div>
        </div>
        </>
    )
}

export default PlusDesktop
