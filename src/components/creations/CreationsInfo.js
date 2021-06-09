import React from 'react'
import {motion} from 'framer-motion';

const CreationsInfo = ({active, update}) => {

    const variant = {
        expand:{
            width: "80%",
        },
        collapsed:{
            width: "16%",
        }
    }

    const iconVariant = {
        expand:{
            fontSize:"80px",
        },
        collapsed:{
            fontSize:"20px"
        }
    }

    return (
        <motion.div className="creations-infos" animate={active ? "expand" : "collapsed"} transition={{duration: 0.6}} variants={variant} onClick={update}>
            <motion.svg transition={{duration: 0.6}} animate={active ? "collapsed" : "expand"} variants={iconVariant} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"></path></motion.svg>
        </motion.div>
    )
}

export default CreationsInfo
