import React from 'react'
import Code from '../code/Code';

const Plus = ({unlocked, unlockPages}) => {
    if(unlocked){
        return(
            unlocked
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
}

export default Plus
