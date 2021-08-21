export default function FooterMobile () {
  const icons = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];
  
  return (
    <section className="mobile-footer mobile">
      <ul className="flex">
        {icons.map((icon) => {
          return <li><ion-icon name={icon}></ion-icon></li>;
        })}
      </ul>
    </section>
  );
}