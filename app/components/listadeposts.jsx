"use client";

import { useState } from "react";
import Link from "next/link";
import ThreeDotsMenu from "./threedotsmenu";

export default function ListaDePosts({ data, title }) {
  const [leftlist, useLeftlist] = useState(false);

  function togglelist() {
    useLeftlist(!leftlist);
  }

  return (
    <div className="left-fix">
      <button
        className={leftlist ? "sidebarButtonOpen" : "sidebarButtonClosed"}
        onClick={togglelist}
      >
        {leftlist ? (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M6 6H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 18H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M6 6H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 18H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {leftlist && (
        <div className="left-list">
          <h1>{title}</h1>
          {data
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <div className="post-item" key={post.id}>
                <Link href={`/#${post.id}`} className="innerdiv">
                  {post.titulo}
                </Link>
                <ThreeDotsMenu />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
