export default function Post(props) {
  let content;

  if (props.type === "video") {
    content = (
      <video controls>
        <source src={props.content.mp4} />
        <source src={props.content.ogv} />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    content = <img className="post-img" src={props.content} />;
  }

  return (
    <li className="post bg-details">
      <PostProfile sender={props.sender} profileImg={props.profileImg} />
      {content}
      <PostOptions />
      <Comments somePerson={props.somePerson} likes={props.likes} />
    </li>
  );
}

function PostProfile(props) {
  return (
    <div className="post-top flex">
      <div className="profile flex">
        <img src={props.profileImg} />
        <h2>{props.sender}</h2>
      </div>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}

function PostOptions() {
  const icons = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];

  return (
    <div className="post-bottom flex">
      <ul className="user-options flex">
        {icons.map((icon) => {
          return <UserOption iconName={icon} />;
        })}
      </ul>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  );
}

function UserOption(props) {
  return (
    <li className="user-option">
      <ion-icon name={props.iconName}></ion-icon>
    </li>
  );
}

function Comments(props) {
  return (
    <div>
      <CommentInfo somePerson={props.somePerson} likes={props.likes} />
      <SendComment />
    </div>
  );
}

function CommentInfo(props) {
  return (
    <div className="comment-info flex">
      <img src={`./assets/img/${props.somePerson}.svg`} />
      <p>Curtido por <strong>{props.somePerson}</strong> e outras <strong>{props.likes}</strong> pessoas</p>
    </div>
  );
}

function SendComment() {
  return (
    <div className="send-comment flex">
      <span><ion-icon name="happy-outline"></ion-icon></span>
      <input type="text" placeholder="Adicione um comentário" />
      <button>Publicar</button>
    </div>
  );
}