// import React from 'react';
import Header from "./Header"
type Props = {
    children: JSX.Element;
}
const routes = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/about',
        text: 'About',
    },
    {
        href: '/contact',
        text: 'Contact',
    }
]
function Template({children}: Props){
    return (
        <div>
            <Header title="Template" links={routes}/>
            {children}
            <footer>
                &copy: {new Date().getFullYear()}
            </footer>
        </div>
    )
}

export default Template;