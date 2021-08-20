import Header from "./Header";
import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";

export default function App () {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main () {
  return (
    <main className="container">
      <Stories />
      <Posts />
      <Aside />
    </main>
  );
}