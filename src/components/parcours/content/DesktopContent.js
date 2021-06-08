import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useState} from 'react';
import FloatingCard from './FloatingCard'

const DesktopContent = ({content}) => {
    const [dragKey, setDragKey] = useState("init");
    const [maxZ, setMaxZ] = useState(5);
    const constraintsRef = useRef(null)

    const setZIndex = (e) => {
        setMaxZ(maxZ+10);
        e.target.style.zIndex = maxZ;
        console.log(e.target.style.zIndex)
    }
    
    return (
        
        <motion.div exit={{x:"-150%"}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
        <div className="parcours-header">
            <h2>Fais glisser les cartes comme bon te semble !</h2>
            <motion.button whileHover={{backgroundColor:"lightgray"}} onClick={() => setDragKey(Math.random())} whileTap={{scale:1.1}}>Réinitialiser</motion.button>
        </div>
            <div className ="desktop-parcours-container" key={dragKey}>
                <motion.div className="drag-container" ref={constraintsRef}>
                    
                <FloatingCard toFront={setZIndex}  content={content[0]} constraintsRef={constraintsRef} sub="Le Danemark (Lycée)" years="2017 > 2020"/>
                <FloatingCard toFront={setZIndex} content={content[1]} constraintsRef={constraintsRef} sub="Le Danemark (Collège)" years="2013 > 2017"/>
                <FloatingCard toFront={setZIndex} content={content[2]} constraintsRef={constraintsRef} sub="Le Danemark (Primaire)" years="2008 > 2013"/>
                <FloatingCard toFront={setZIndex} content={content[3]} constraintsRef={constraintsRef} sub="La France" years="2005 > 2008"/>
                <FloatingCard toFront={setZIndex} content={content[4]} constraintsRef={constraintsRef} sub="La Norvège" years="2002 > 2005"/>

                </motion.div>
            </div>
        </motion.div>
    )
}

export default DesktopContent
