import React from 'react';
import {motion} from 'framer-motion';
import CreationMusic from './CreationMusic';
import CreationsInfo from './CreationsInfo';
import Code from '../code/Code';

const CreationsContainer = ({unlocked, unlockPages}) => {
    if(unlocked){
        return(
           <motion.div className="creation-container" exit={{x:'-150%'}} transition={{duration:0.6}}>
            <CreationMusic />
            <CreationsInfo /> 
           </motion.div>
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
    
}

export default CreationsContainer
