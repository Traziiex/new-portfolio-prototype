import {AiOutlineMenu as BarMenu} from "react-icons/ai";
import {useState} from 'react';
import MobileMenu from './MobileMenu.js'

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const openClose = () => {
        setOpen(!open)
        console.log(open)
    }

    return (
        <>
            <BarMenu onClick={() => setOpen(!open)}/>
            <MobileMenu opened={open} openClose={openClose}/>
        </>
    )
}

export default MobileNav
