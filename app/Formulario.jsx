"use client";
import { useState } from "react";
import { enviarCotizacion } from "./cotizar";
import Icono from "./Icono";

export default function Formulario() {
  const [estado, setEstado] = useState("");
  const [enviando, setEnviando] = useState(false);
  async function enviar(e) {
    e.preventDefault();
    if (enviando) return;
    const form = e.currentTarget;
    setEnviando(true); setEstado("Enviando consulta…");
    try {
      const resultado = await enviarCotizacion(new FormData(form));
      setEstado(resultado.texto);
      if (resultado.ok) form.reset();
    } catch { setEstado("No hubo conexión. Reintenta o usa el enlace de WhatsApp."); }
    finally { setEnviando(false); }
  }
  return <form onSubmit={enviar}>
    <label>Tu nombre<input name="nombre" required maxLength={100} autoComplete="name" /></label>
    <label>Correo o teléfono<input name="contacto" required maxLength={200} placeholder="¿Dónde te respondemos?" /></label>
    <label className="trampa" aria-hidden="true">Sitio web<input name="web" autoComplete="off" tabIndex={-1} /></label>
    <label>Tu mensaje<textarea name="mensaje" rows="4" required maxLength={2000} placeholder="Cuéntanos qué tienes en mente…" /></label>
    <button className="btn principal" disabled={enviando}><Icono nombre="enviar" />{enviando ? "Enviando…" : "Enviar cotización"}</button>
    <p role="status">{estado}</p>
  </form>;
}
