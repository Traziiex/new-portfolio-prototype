import {motion} from 'framer-motion';
import {AiOutlineCheck, AiOutlineClose, AiOutlineQuestionCircle} from 'react-icons/ai';

import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Moi from './img/Moi.png';


const ImgMoiZoom = ({close}) => {
    return (
        <motion.div className="code-container"  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close} style={{cursor:"pointer"}}>
            <img src={Moi} style={{backgroundColor:"white", borderRadius:10}}/>
        </motion.div>
    )
}

export default ImgMoiZoom
