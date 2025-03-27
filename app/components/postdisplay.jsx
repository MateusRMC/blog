"use client";

import { formatDistanceToNow } from 'date-fns';
import ReactMarkdown from 'react-markdown';

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
          <div className="post-corpo-container">
            <ReactMarkdown>{post.corpo}</ReactMarkdown> {/* basically a bunch of <p>'s divided by breaklines */}
          </div>
        </div>
      ))
  );
}



