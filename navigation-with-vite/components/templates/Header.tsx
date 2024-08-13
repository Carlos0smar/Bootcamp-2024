import {Link} from 'react-router-dom';
type HeaderProps = {
    title: string;
    links: { href: string; label: string }[];
}

function Header({ title, links }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}