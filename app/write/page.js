import "../styles/styles.css";
import Header from "app/components/header";
import { supabase } from "../lib/supabase";
import AddPost from "app/components/addpost";

export default function Write() {
  async function addPost(formData) {
    "use server";

    const titulo = formData.get("titulo");
    const subtitulo = formData.get("subtitulo");
    const corpo = formData.get("corpo");

    const { data, error } = await supabase.from("posts").insert([{ titulo, subtitulo, corpo }]);

    if (error) {
      throw new Error(error.message);
    }
  }

  return (
    <div className="write">
      <Header header="Write your post" />
      <AddPost addPost={addPost} />
    </div>
  );
}
