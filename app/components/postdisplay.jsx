export default function PostDisplay({ data }) {
  return (
    data
      .slice() // Cria uma cópia do array para evitar mutação
      .sort((a, b) => b.id - a.id) // Ordena de forma decrescente pelo ID
      .map(post => (
        <div key={post.id} className="post-container">
          <p className="created_at">{post.created_at}</p>
          <h1>{post.titulo}</h1>
          <h2>{post.subtitulo}</h2>
          <p>{post.corpo}</p>
        </div>
      ))
  );
}



