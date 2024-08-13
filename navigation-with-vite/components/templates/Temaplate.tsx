import { useHref } from "react-router-dom"
import Header from "./Header"
type Props = {
    children: React.ReactNode;
}
const routes = [
    {
        href: '/',
        text: 'Home'
    },
    {
        useHref: '/about',
        text: 'About'
    },
    {
        href: '/contact',
        text: 'Contact'
    }
]
function Template({children}: Props){
    return (
        <div>
            <Header title="Navigation with Vite" links={routes}/>
            {children}
            <footer>
                &copy: {new Date().getFullYear()}
            </footer>
        </div>
    )
}

default export Template