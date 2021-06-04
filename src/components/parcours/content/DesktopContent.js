import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useState} from 'react';
import FloatingCard from './FloatingCard'

const DesktopContent = ({content}) => {
    const [dragKey, setDragKey] = useState("init");
    const constraintsRef = useRef(null)
    
    return (
        
        <>
        <div className="parcours-header">
            <h2>Fais glisser les cartes comme bon te semble !</h2>
            <motion.button whileHover={{backgroundColor:"lightgray"}} onClick={() => setDragKey(Math.random())} whileTap={{scale:1.1}}>Réinitialiser</motion.button>
        </div>
            <div className ="desktop-parcours-container" key={dragKey}>
                <motion.div className="drag-container" ref={constraintsRef}>
                    
                <FloatingCard  content={content[0]} constraintsRef={constraintsRef} sub="Le Danemark (Lycée)" years="2017 > 2020"/>
                <FloatingCard  content={content[1]} constraintsRef={constraintsRef} sub="Le Danemark (Collège)" years="2013 > 2017"/>
                    <FloatingCard  content={content[2]} constraintsRef={constraintsRef} sub="Le Danemark (Primaire)" years="2008 > 2013"/>
                <FloatingCard  content={content[3]} constraintsRef={constraintsRef} sub="La France" years="2005 > 2008"/>
                    <FloatingCard content={content[4]} constraintsRef={constraintsRef} sub="La Norvège" years="2002 > 2005"/>

                </motion.div>
            </div>
        </>
    )
}

export default DesktopContent
