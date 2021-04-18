import React from 'react'
import {AiOutlineClose as Close, AiOutlineLinkedin as LinkedIn, AiFillGithub as Github} from 'react-icons/ai';

import {motion} from 'framer-motion';

const DesktopSocialLinks = () => {
    return (
        <ul className="desktop-sociallinks">
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><LinkedIn /></motion.li>
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><Github /></motion.li>
        </ul>
    )
}

export default DesktopSocialLinks
