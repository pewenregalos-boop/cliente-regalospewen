"use server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { tienda } from "../data/tienda";

export async function enviarCotizacion(datos) {
  const campo = key => typeof datos.get(key) === "string" ? datos.get(key).trim() : "";
  const nombre = campo("nombre"), contacto = campo("contacto"), mensaje = campo("mensaje");
  const esCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto);
  const esTelefono = /^\+?[\d ()-]+$/.test(contacto) && /^\d{8,15}$/.test(contacto.replace(/\D/g, ""));
  if (campo("web") || !nombre || nombre.length > 100 || contacto.length > 200 ||
      (!esCorreo && !esTelefono) || !mensaje || mensaje.length > 2000) {
    return { ok: false, texto: "Revisa tu nombre, ingresa un correo o teléfono válido y cuéntanos qué necesitas." };
  }
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (!env.CORREO?.send || !env.CORREO_REMITENTE) throw new Error("correo_no_configurado");
    await env.CORREO.send({
      from: { email: env.CORREO_REMITENTE, name: tienda.nombre }, to: tienda.correo,
      ...(esCorreo ? { replyTo: contacto } : {}), subject: "Nueva cotización · Regalos Pewen",
      text: `Nombre: ${nombre}\nContacto: ${contacto}\n\n${mensaje}`,
    });
    return { ok: true, texto: "Enviamos tu consulta a la tienda. Te responderemos al contacto que nos dejaste." };
  } catch {
    console.error("cotizacion: envío de correo no disponible");
    return { ok: false, texto: "No pudimos enviar tu consulta. Tus datos siguen aquí; reintenta o escríbenos por WhatsApp." };
  }
}
