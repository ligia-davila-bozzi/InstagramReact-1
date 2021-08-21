import Post from "./Post";

export default function Posts() {
  const posts = [
    {sender: "adorable_animals", profileImg: "./assets/img/adorable_animals.svg", content: {mp4: "./assets/video/video.mp4", ogv: "./assets/video/video.ogv"}, type: "video", somePerson: "chibirdart", likes: "234.122"},
    {sender: "meowed", profileImg: "./assets/img/meowed.svg", content: "./assets/img/gato-telefone.svg", type: "image", somePerson: "nathanwpylestrangeplanet", likes: "101.523"},
    {sender: "barked", profileImg: "./assets/img/barked.svg", content: "./assets/img/dog.svg", type: "image", somePerson: "respondeai", likes: "99.159"},
  ];
  
  return (
    <section className="posts-section">
      <ul className="posts">
        {posts.map((post) => {
          return <Post somePerson={post.somePerson} likes={post.likes} sender={post.sender} profileImg={post.profileImg} content={post.content} type={post.type}/>
        })}        
      </ul>
    </section>
  );
}