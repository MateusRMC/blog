import ListaDePosts from "./components/listadeposts";
import PostDisplay from "./components/postdisplay";
import Header from "./components/header";
import Actionbutton from "./components/actionbutton";
import Link from "next/link";
import "./styles/styles.css";

export default async function Home() {
  const res = await fetch("https://blog-heymateus.vercel.app/api/readposts", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="container">
      <ListaDePosts title="My previous posts" data={data} />
      <div className="content">
        <Header header="Matbooks - My notes on life." />
        <PostDisplay data={data} />
      </div>
      <Actionbutton destination="/write" button="Add new post" />
    </div>
  );
}
