import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const DesktopNavLinks = () => {
    return (
        <ul className="desktop-navlinks">
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><Link to="/">Présentation</Link></motion.li>
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><Link to="/mon-parcours">Mon parcours</Link></motion.li>
            <motion.li initial={{scale:1}} whileTap={{scale:0.99}}><Link to="/mes-projets">Mes projets</Link></motion.li>
        </ul>
    )
}

export default DesktopNavLinks
