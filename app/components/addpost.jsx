export default function AddPost({addPost}){
  return (
    <form className="form" action={addPost}>
      <div className="title-subtitle">
        <input type="text" className="form-titulo" name="titulo" placeholder="Insira o título" required />
        <input
          type="text"
          className="form-subtitulo"
          name="subtitulo"
          placeholder="Insira o subtitulo (opcional)"
        />
        </div>
        <textarea className="form-corpo" name="corpo" placeholder="Insira o corpo do texto" required></textarea>
        <button className="form-submit" type="submit">Enviar post</button>
      </form>
  )
}