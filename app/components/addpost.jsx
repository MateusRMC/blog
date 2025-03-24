export default function AddPost({addPost}){
  return (
    <form className="form" action={addPost}>
        <input type="text" name="titulo" placeholder="Insira o título" required />
        <input
          type="text"
          name="subtitulo"
          placeholder="Insira o subtitulo"
          required
        />
        <textarea name="corpo" placeholder="Insira o corpo do texto" required></textarea>
        <button type="submit">Adicionar Post</button>
      </form>
  )
}