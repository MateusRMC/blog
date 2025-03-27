"use client";

import { useState, useRef, useEffect } from "react";

export default function ThreeDotsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        &#x22EE;
      </button>

      {open && (
        <div className="menu-popup">
          <div className="menu-item">Editar</div>
          <div className="menu-item">Arquivar</div>
          <div className="menu-item delete">Deletar</div>
        </div>
      )}
    </div>
  );
}
