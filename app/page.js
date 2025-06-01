import ListaDePosts from "./components/listadeposts";
import PostDisplay from "./components/postdisplay";
import Header from "./components/header";
import Actionbutton from "./components/actionbutton";
import Noposts from "./components/noposts";

import "./styles/styles.css";

export default async function Home() {
  const res = await fetch("https://blog-heymateus.vercel.app/api/readposts", {
    cache: "no-store",
  });

  const json = await res.json();
  const data = Array.isArray(json.data) ? json.data : [];

  return (
    <div className="container">
      {data.length > 0 && <ListaDePosts title="My previous posts" data={data} />}
      <div className="content">
        <Header header="Matbooks — My life journal." />
        {data.length === 0 ? <Noposts /> : <PostDisplay data={data} />}
      </div>
      {data.length > 0 && <Actionbutton className="cornerActionButton" destination="/write" button="Add new post" />}
    </div>
  );
}
