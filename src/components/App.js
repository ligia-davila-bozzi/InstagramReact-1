import Header from "./Header";
import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";
import FooterMobile from "./FooterMobile";


export default function App () {
  return (
    <>
      <Header />
      <Main />
      <FooterMobile />
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