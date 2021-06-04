import React from 'react'
import {motion} from 'framer-motion'
import {useState} from 'react';

const Card = ({years, content, sub}) => {

    const [plus, setPlus] = useState(false);

    const pVariant ={
        open:{
            scale:1
        },
        close:{
            scale:0
        }
    }

    const cVariant ={
        open:{
            minHeight:"100%"
        },
        close:{  rotateX:0, opacity: 1, height: "120px" }
    }

    return (
        <motion.div variants={cVariant} animate={plus ? "open" : "close"}>
            <h2>{years}</h2>
            <h3>{sub}</h3>
            <motion.p initial={{scale:0}} animate={plus ? "open" : "close"} variants={pVariant}>{content}</motion.p>
            <button whileHover={{backgroundColor:"lightgray"}} onClick={() => setPlus(!plus)}>{plus ? "Voir moins" : "Voir plus"}</button>
        </motion.div>
    )
}

export default Card
