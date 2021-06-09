import React from 'react';
import {motion} from 'framer-motion';
import CreationMusic from './CreationMusic';
import CreationsInfo from './CreationsInfo';
import Code from '../code/Code';
import {useState} from 'react';

const CreationsContainer = ({unlocked, unlockPages}) => {

    const [active, setActive] = useState(0);

    const updateActive = (param) => {
        setActive(param);
    }

    if(unlocked){
        return(
           <motion.div className="creation-container" exit={{x:'-150%'}} transition={{duration:0.6}}>
            <CreationMusic active={active === 0 ? true : false} update={() => updateActive(0)}/>
            <CreationsInfo active={active === 1 ? true : false} update={() => updateActive(1)}/> 
           </motion.div>
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
    
}

export default CreationsContainer
