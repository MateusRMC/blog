import ListaDePosts from "./components/listadeposts";
import PostDisplay from "./components/postdisplay";
import Header from "./components/header";
import "./styles/styles.css";

export default async function Home() {
  const res = await fetch("https://blog-heymateus.vercel.app/api/getposts");
  const data = await res.json();

  return (
    <div className="container">
      <div className="left-list">
        <ListaDePosts data={data} />
      </div>
      <div className="content">
        <Header header="Homepage" />
        <PostDisplay data={data} />
      </div>
    </div>
  );
}
