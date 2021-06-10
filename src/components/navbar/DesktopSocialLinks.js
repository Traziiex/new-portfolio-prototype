import React from 'react'
import {AiOutlineClose as Close, AiOutlineLinkedin as LinkedIn, AiFillGithub as Github} from 'react-icons/ai';

import {motion} from 'framer-motion';

const DesktopSocialLinks = () => {
    return (
        <ul className="desktop-sociallinks">
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><a target="_blank" href="https://www.linkedin.com/in/noah-blanchard-2734501b8/"><LinkedIn /></a></motion.li>
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><a target="_blank" href="https://github.com/Traziiex"><Github /></a></motion.li>
        </ul>
    )
}

export default DesktopSocialLinks
