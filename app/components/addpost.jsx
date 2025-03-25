export default function AddPost({addPost}){
  return (
    <form className="form" action={addPost}>
        <input type="text" className="form-titulo" name="titulo" placeholder="Insira o título" required />
        <input
          type="text"
          className="form-subtitulo"
          name="subtitulo"
          placeholder="Insira o subtitulo"
          required
        />
        <textarea className="form-corpo" name="corpo" placeholder="Insira o corpo do texto" required></textarea>
        <button type="submit">Adicionar Post</button>
      </form>
  )
}