import Media from 'react-media';
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Navbar = () => {
    return (
        <nav>
            <h1 className='logo-name'>Noah Blanchard</h1>
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
