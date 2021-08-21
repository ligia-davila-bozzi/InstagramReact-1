export default function Aside() {
  return (
    <aside className="side-bar">
      <Profile />
      <Suggestions />
      <Footer />
    </aside>
  );
}

function Profile() {
  return (
    <div className="profile flex">
      <img src={`./assets/img/catanacomics.svg`} />
      <div>
        <h2>catanacomics</h2>
        <p>Catana</p>
      </div>
    </div>
  );
}

function Suggestions() {
  const profiles = [
    { user: "bad.vibe.memes", image: "./assets/img/bad.vibes.memes.svg" },
    { user: "chibirdart", image: "./assets/img/chibirdart.svg" },
    { user: "razoesparaacreditar", image: "./assets/img/razoesparaacreditar.svg" },
    { user: "adorable_animals", image: "./assets/img/adorable_animals.svg" },
    { user: "smallcutecats", image: "./assets/img/smallcutecats.svg" },
  ];

  return (
    <section className="suggestions-section">
      <div className="suggestions-top flex">
        <h3>Sugestões para você</h3>
        <a href="#">Ver tudo</a>
      </div>
      <ul className="suggestions">
        {profiles.map((profile) => {
          return (
            <li className="suggestion flex">
              <div className="suggestion-profile flex">
                <img src={profile.image} />
                <div>
                  <strong>{profile.user}</strong>
                  <p>Segue você</p>
                </div>
              </div>
              <a href="#">Seguir</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Footer () {
  return (
    <footer>
      <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
      <p>© 2021 INSTAGRAM DO FACEBOOK</p>
    </footer>
  );
}