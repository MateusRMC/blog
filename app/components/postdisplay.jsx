import { formatDistanceToNow } from 'date-fns';


export default function PostDisplay({ data }) {
  return (
    data
      .slice() // Cria uma cópia do array para evitar mutação
      .sort((a, b) => b.id - a.id) 
      .map(post => (
        <div key={post.id} id={post.id} className="post-container">
          <p className="created_at">{formatDistanceToNow(new Date(post.created_at), { addSuffix: true})}</p>
          <h1 className="post-titulo">{post.titulo}</h1>
          <h2 className="post-subtitulo">{post.subtitulo}</h2>
          <p className="post-corpo">{post.corpo}</p>
        </div>
      ))
  );
}



