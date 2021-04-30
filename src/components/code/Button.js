import React from 'react';
import {motion} from 'framer-motion';

const Button = ({val, event}) => {
    return (
        <motion.button whileTap={{backgroundColor: '#a3b8c4'}} transition={{duration:0.075}} onClick={event}>{val}</motion.button>
    )
}

export default Button
