export default function Stories() {
  const stories = [
    {image: "./assets/img/9gag.svg", user: "9gag"},
    {image: "./assets/img/meowed.svg", user: "meowed"},
    {image: "./assets/img/barked.svg", user: "barked"},
    {image: "./assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
    {image: "./assets/img/wawawicomics.svg", user: "wawawicomics"},
    {image: "./assets/img/respondeai.svg", user: "respondeai"},
    {image: "./assets/img/filomoderna.svg", user: "filomoderna"},
    {image: "./assets/img/memeriagourmet.svg", user: "memeriagourmet"},
  ];

  return (
    <section className="stories-section bg-details">
      <ul className="stories-list flex">
        {stories.map((storie) => {
          return <StorieItem image={storie.image} user={storie.user} />
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
      <p>{props.user}</p>
    </li>
  );
}