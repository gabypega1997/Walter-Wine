import Link from "next/link"


type NavbarButton

const NavbarButton = ({children, link, style}) => {
    return (<Link>
    {children}
    </Link>)
}