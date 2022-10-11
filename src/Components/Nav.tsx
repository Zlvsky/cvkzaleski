import React, {useState, FC} from 'react';
import logo from './../Assets/images/zaleski logo obrys.png';

const navLinks = [
    {navLinkId: "Home", scrollToId: "hero"},
    {navLinkId: "About", scrollToId: "about"},
    {navLinkId: "Projects", scrollToId: "projects"},
    {navLinkId: "Contact", scrollToId: "contact"},
]


interface Props {
    navLinkId: string
    scrollToId: string
    activeNavLinkId: string
    setActiveLinkId: any
}

const NavLink: FC<Props> = ({ navLinkId, scrollToId, activeNavLinkId, setActiveLinkId}) => {
    const handleClick = () => {
        setActiveLinkId(navLinkId);
        document.getElementById(scrollToId)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <span
            id="navLinkId"
            className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
            onClick={handleClick}
            >
                {navLinkId}
        </span>
    )
}

const Nav = () => {
    const [activeNavLinkId, setActiveNavLinkId] = useState('');

    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="logo" height="40"/>
            </div>
            <div id="navigation">
                {navLinks.map(
                    ({navLinkId, scrollToId}) => {
                        return(
                            <NavLink 
                                navLinkId={navLinkId}
                                scrollToId={scrollToId}
                                activeNavLinkId={activeNavLinkId}
                                setActiveLinkId={setActiveNavLinkId}
                            />
                        )
                    }
                )}
            </div>
        </nav>
    )
}

export default Nav