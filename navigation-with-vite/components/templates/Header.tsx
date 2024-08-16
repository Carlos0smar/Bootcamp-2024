import {Link} from 'react-router-dom';
import React from 'react';

type HeaderProps = {
    title: string;
    links: { href: string; text: string }[];
};

function Header({ title, links }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;