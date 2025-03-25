export default function AddPost({addPost}){
  return (
    <form className="form" action={addPost}>
        <input type="text" className="titulo" name="titulo" placeholder="Insira o título" required />
        <input
          type="text"
          className="subtitulo"
          name="subtitulo"
          placeholder="Insira o subtitulo"
          required
        />
        <textarea className="corpo" name="corpo" placeholder="Insira o corpo do texto" required></textarea>
        <button type="submit">Adicionar Post</button>
      </form>
  )
}