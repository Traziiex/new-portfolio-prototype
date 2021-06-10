import React from 'react'
import{motion} from 'framer-motion';
import{useState} from 'react';

const FloatingCard = ({constraintsRef, years, content, sub, toFront}) => {

    const [plus, setPlus] = useState(false);

    const [maxZ, setMaxZ] = useState(90);

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
            width:"400px",
            height:"500px"
        },
        close:{
            height:"100px",
            width:"100px"
        }
    }

    return (
        <motion.div drag dragConstraints={constraintsRef} dragElastic={0.05} whileTap={{ scale: 1.1 }} dragTransition={{power: 0.35, timeConstant: 400}} variants={cVariant} animate={plus ? "open" : "close"} className="floating-cards" onMouseDown={toFront}>
            <h2>{years}</h2>
            <h3>{sub}</h3>
            <motion.p initial={{scale:0}} animate={plus ? "open" : "close"} variants={pVariant}>{content}</motion.p>
            <motion.button whileHover={{backgroundColor:"rgb(211,211,211)"}} onClick={() => setPlus(!plus)}>{plus ? "Voir moins" : "Voir plus"}</motion.button>
        </motion.div>
    )
}

export default FloatingCard
