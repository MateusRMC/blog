import { supabase } from "./lib/supabase";
import ListaDePosts from "./components/listadeposts";
import PostDisplay from "./components/postdisplay";
import Header from "./components/header";
import "./styles/styles.css";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data, error } = await supabase.from("posts").select("*");

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
