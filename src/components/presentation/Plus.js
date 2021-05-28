import React from 'react'
import Code from '../code/Code';
import Media from 'react-media';
import {motion} from 'framer-motion';
import Moi from './img/Moi.png';
import ImgMoiZoom from './ImgMoiZoom'
import {useState} from 'react';
import PlusPhone from './PlusPhone';
import PlusDesktop from './PlusDesktop';

const Plus = ({unlocked, unlockPages}) => {
    
    if(unlocked){
        return(
            <Media queries={{small: "(max-width: 520px)", large: "(min-width: 521px)"}}>
            {matches => (
                <>
                    {matches.small && <PlusPhone />}
                    {matches.large && <PlusDesktop />}
                </>
            )}
        </Media>
        );
    }else{
        return(
            <Code unlockPages={unlockPages}/>
        )
    }
}

export default Plus
