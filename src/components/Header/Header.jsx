import logo from '/src/assets/react.svg';

export function Header() {
    return (
        <header className="flex justify-between items-center relative">
            <div>
                <a className="">
                    <img className="" src={logo} alt="logo"/>
                </a>
            </div>
            <ul className="list-inline flex justify-between items-center">
                <li><a className="">Iniciar sesión</a></li>
                <li><a className="">Registrarse</a></li>
            </ul>
        </header>
    );
}