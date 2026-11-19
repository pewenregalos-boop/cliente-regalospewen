"use client";
import { useEffect, useRef, useState } from "react";
import { secciones, tienda } from "../data/tienda";
import Icono from "./Icono";

export default function Nav() {
  const [activo, setActivo] = useState("portada");
  const [abierto, setAbierto] = useState(false);
  const boton = useRef(null);
  useEffect(() => {
    function actualizar() {
      const id = window.location.hash.slice(1);
      setActivo(secciones.some(([clave]) => clave === id) ? id : "portada");
      setAbierto(false);
    }
    actualizar();
    window.addEventListener("hashchange", actualizar);
    return () => window.removeEventListener("hashchange", actualizar);
  }, []);
  return <><a className="saltar" href="#contenido" onClick={e => {
    e.preventDefault();
    document.getElementById("contenido").focus();
  }}>Saltar al contenido</a>
  <header onKeyDown={e => { if (abierto && e.key === "Escape") { setAbierto(false); boton.current.focus(); } }}
    onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setAbierto(false); }}>
    <div className="nav-wrap">
      <a className="brand" href="#portada" onClick={() => setAbierto(false)}><img src="/marca.webp" srcSet="/marca.webp 96w, /sello.webp 512w" sizes="(width > 960px) clamp(108px, 10vw, 136px), 42px" width="42" height="42" alt="" /><span>Regalos <em>Pewen</em></span></a>
      <button ref={boton} className="toggle" aria-controls="menu" aria-expanded={abierto} aria-label={abierto ? "Cerrar menú" : "Abrir menú"} onClick={() => setAbierto(!abierto)}>{abierto ? "✕" : "☰"}</button>
      <nav id="menu" aria-label="Secciones" className={abierto ? "open" : ""}>{secciones.map(([id, texto]) =>
        <a key={id} href={`#${id}`} aria-current={activo === id ? "location" : undefined} onClick={() => setAbierto(false)}>{texto}</a>)}</nav>
      <a className="nav-wa" href={tienda.whatsapp} rel="noopener" target="_blank" aria-label="WhatsApp"><Icono nombre="chat" /><span>WhatsApp</span></a>
    </div>
  </header></>;
}
