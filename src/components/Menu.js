import Link from "./Link";

function Menu() {
    const links = [
        {label: 'home', path: '/'},
        {label: 'about', path: '/about'},
        {label: 'installation', path: '/installations'},
        {label: 'sound', path: '/sounds'},
        {label: 'releases', path: '/releases'},
        {label: 'contact', path: '/contact'},
    ];

    const renderedLinks = links.map((link) => {
        return <h1><Link key={link.label} to={link.path}>{link.label}</Link></h1>
    });

    return (
        <div style={{}}>
            {renderedLinks}
        </div>

    )
}

export default Menu;