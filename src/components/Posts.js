export default function Posts() {
  const postObjects = [
    {content: {mp4: "./assets/video/video.mp4", ogv: "./assets/video/video.ogv"}, type: "video"},
    {content: "./assets/img/gato-telefone.svg", type: "image"},
    {content: "./assets/img/dog.svg", type: "image"},
  ];
  
  return (
    <section className="posts-section">
      <ul className="posts">
        {postObjects.map((postObj) => {
          return <Post content={postObj.content} type={postObj.type}/>
        })}        
      </ul>
    </section>
  );
}

function Post(props) {
  let content;

  if (props.type === "video") {
    content = (
      <video controls>
        <source src={props.content.mp4} />
        <source src={props.content.ogv} />
        Your browser does not support the video tag.
      </video>
    )
  } else {
    content = <img className="post-img" src={props.content} />
  }

  return (
    <li className="post bg-details">
      <PostTop />
      {content}
      <PostBottom />
    </li>
  );
}

function PostTop() {
  return (
    <div className="post-top flex">
      <div className="profile flex">
        <img src="./assets/img/meowed.svg" />
        <h2>meowed</h2>
      </div>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}

function PostBottom() {
  const icons = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];

  return (
    <div className="post-bottom flex">
      <ul className="user-options flex">
        {icons.map((icon) => {
          return <UserOption iconName={icon}/>;
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