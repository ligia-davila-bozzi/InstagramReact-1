export default function Stories() {
  const images = [
    "./assets/img/9gag.svg",
    "./assets/img/meowed.svg",
    "./assets/img/barked.svg",
    "./assets/img/nathanwpylestrangeplanet.svg",
    "./assets/img/wawawicomics.svg",
    "./assets/img/respondeai.svg",
    "./assets/img/filomoderna.svg",
    "./assets/img/memeriagourmet.svg",
  ];

  return (
    <section className="stories-section bg-details">
      <ul className="stories-list flex">
        {images.map((image) => {
          return <StorieItem image={image} />
        })}
      </ul>
    </section>
  );
}

function StorieItem(props) {
  return (
    <li className="storie-item">
      <img className="bg-storie" src="./assets/img/story-circle.svg" />
      <img className="storie-profile" src={props.image} />
    </li>
  );
}