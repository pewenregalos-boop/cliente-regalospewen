"use client";
import { useEffect, useRef, useState } from "react";
import { secciones, tienda } from "../data/tienda";

export default function Nav() {
  const [activo, setActivo] = useState("portada");
  const [abierto, setAbierto] = useState(false);
  const boton = useRef(null);
  useEffect(() => {
    const nodos = secciones.map(([id]) => document.getElementById(id));
    function actualizar() {
      const limite = Math.max(boton.current?.closest("header")?.offsetHeight ?? 68,
        boton.current?.closest("header")?.querySelector(".brand img")?.getBoundingClientRect().bottom ?? 0) + 40;
      const actual = nodos.filter(n => n.getBoundingClientRect().top <= limite).at(-1);
      setActivo(actual?.id ?? "portada");
    }
    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => { window.removeEventListener("scroll", actualizar); window.removeEventListener("resize", actualizar); };
  }, []);
  return <header onKeyDown={e => { if (abierto && e.key === "Escape") { setAbierto(false); boton.current.focus(); } }}
    onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setAbierto(false); }}>
    <div className="nav-wrap">
      <a className="brand" href="#portada" onClick={() => setAbierto(false)}><img src="/marca.webp" srcSet="/marca.webp 96w, /sello.webp 512w" sizes="(width > 960px) clamp(108px, 10vw, 136px), 42px" width="42" height="42" alt="" /> Regalos Pewen</a>
      <nav id="menu" aria-label="Secciones" className={abierto ? "open" : ""}>{secciones.map(([id, texto]) =>
        <a key={id} href={`#${id}`} aria-current={activo === id ? "location" : undefined} onClick={() => setAbierto(false)}>{texto}</a>)}</nav>
      <a className="nav-wa" href={tienda.whatsapp} rel="noopener" target="_blank">WhatsApp ↗</a>
      <button ref={boton} className="toggle" aria-controls="menu" aria-expanded={abierto} aria-label={abierto ? "Cerrar menú" : "Abrir menú"} onClick={() => setAbierto(!abierto)}>{abierto ? "✕" : "☰"}</button>
    </div>
  </header>;
}
