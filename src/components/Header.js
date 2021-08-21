export default function Header() {
  return (
    <header className="top-bar">
      <div className="container flex">
        <Logo />
        <input type="text" className="search-bar" placeholder="Pesquisar" />
        <NavBar />
      </div>
    </header>
  );
};

function Logo() {
  return (
    <div className="logo flex">
      <span className="mobile"><ion-icon name="logo-instagram"></ion-icon></span>
      <img src="./assets/img/logo.png" />
      <span className="mobile"><ion-icon name="paper-plane-outline"></ion-icon></span>      
    </div>
  );
}

function NavBar() {
  const icons = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline",
  ];

  return (
    <nav className="nav-bar">
      <ul className="user-options flex">
        {icons.map((icon) => {
          return <UserOption iconName={icon} />
        })}
      </ul>
    </nav>
  );
}

function UserOption(props) {
  return (
    <li className="user-option">
      <ion-icon name={props.iconName}></ion-icon>
    </li>
  );
}