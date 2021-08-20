export default function Header () {
  return (
    <header className="top-bar">
      <div className="container flex">
        <img src="./assets/img/logo.png" />
        <input type="text" className="search-bar" placeholder="Pesquisar"/>
        <NavBar />
      </div>      
    </header>
  );
};

function NavBar () {
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

function UserOption (props) {
  return (
    <li className="user-option">
      <ion-icon name={props.iconName}></ion-icon>
    </li>
  );
}