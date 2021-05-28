import Media from 'react-media';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><h1 className='logo-name'>Noah Blanchard</h1></Link>
            <Media queries={{
                small: "(max-width: 520px)",
                large: "(min-width: 521px)"
            }}>
            {matches => (
            <>
                {matches.small && <MobileNav />}
                {matches.large && <DesktopNav />}
            </>
            )}
            </Media>
        </nav>
    )
}

export default Navbar
