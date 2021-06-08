import {AiOutlineClose as Close, AiOutlineLinkedin as LinkedIn, AiFillGithub as Github} from 'react-icons/ai';
import {motion} from 'framer-motion';

import {Link} from 'react-router-dom';


const MobileMenu = ({openClose, opened}) => {
    const sideMenuAnim = {
        in: { opacity: 1, x: 0, pointerEvents: 'auto' },
        out: { opacity: 0, x: "100%", pointerEvents: 'none'}
    }
    const backgroundAnim = {
        in: { opacity: 1, pointerEvents: 'auto'},
        out: { opacity: 0, pointerEvents: 'none'}
    }
    const menuItemsAnim = {
        in: { opacity: 1, pointerEvents: 'auto' },
        out: { opacity: 0, pointerEvents: 'none' }
    }

    let dur = 0;

    if (opened){
        dur=0.4;
    }else{
        dur=0;
    }

    return (
        <>
            <motion.div className="side-menu-container" initial={{opacity:0, pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} variants={backgroundAnim} transition={{duration:0.2}} onClick={openClose}/>
            <motion.div className="side-menu" initial={{opacity:0, x:'100%', pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} variants={sideMenuAnim} transition={{duration:0.4, ease:"easeInOut"}}>
                    <Close onClick={openClose}/>
                    <ul className="menu-links">
                        <motion.li variants={menuItemsAnim} initial={{opacity:0, pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} transition={{duration:dur, delay:0.4}}><Link to="/presentation" onClick={openClose}>Présentation</Link></motion.li>
                        <motion.li variants={menuItemsAnim} initial={{opacity:0, pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} transition={{duration:dur, delay:0.4*1.2}}><Link to="/mon-parcours" onClick={openClose}>Mon Parcours</Link></motion.li>
                        <motion.li variants={menuItemsAnim} initial={{opacity:0, pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} transition={{duration:dur, delay:0.4*1.4}}><Link to="/mes-creations" onClick={openClose}>Mes créations</Link></motion.li>
                    </ul>
                    <motion.div className="social-links" variants={menuItemsAnim} initial={{opacity:0, pointerEvents: 'none'}} animate={opened ? 'in' : 'out'} transition={{duration:dur, delay:0.4*1.6}}>
                        <a href="https://github.com/Traziiex"><Github /></a>
                        <LinkedIn />
                    </motion.div>
            </motion.div>
        </>
    )
}

export default MobileMenu
 //<motion.div className="side-menu-container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>