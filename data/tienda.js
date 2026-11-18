export const tienda = {
  nombre: "Regalos Pewen",
  whatsapp: "https://wa.me/56932417625",
  telefono: "+56 9 3241 7625",
  correo: "pewenregalos@gmail.com",
  instagram: "https://www.instagram.com/regalos.pewen/",
  impresiones: "https://www.instagram.com/impresiones.pewen/",
  mapa: "https://maps.app.goo.gl/DpjLb14EWvoEt6b47",
  calle: "Los Jazmines 81",
};

export const secciones = [
  ["portada", "Portada"], ["quienes-somos", "Quiénes somos"],
  ["novedades", "Novedades"], ["catalogo", "Catálogo"],
  ["ubicacion", "Ubicación y horarios"], ["contacto", "Contacto"],
];

export const categorias = [
  { slug: "emprendimientos", nombre: "Para emprendimientos", imagen: "/papeleria.svg", alt: "Ilustración de tarjetas y etiquetas personalizadas", incluye: "Tarjetas de presentación, stickers, tazones, jockeys y poleras con logo, lanyards, cuadernos, calendarios imantados, flyers, botellas con logo y bolsas de género o TNT personalizadas." },
  { slug: "regalos", nombre: "Regalos personalizados", imagen: "/regalo.svg", alt: "Ilustración de un regalo envuelto con cinta", incluye: "Llaveros, cojines para colorear y de apego, tazas personalizadas, libretas de bolsillo, mini mercadito, libros para colorear y agendas." },
  { slug: "cumpleanos", nombre: "Para cumpleaños", imagen: "/cumple.svg", alt: "Ilustración de una torta y banderines de fiesta", incluye: "Stickers, toppers, piñatas, cajas dulceras y banderines." },
];

export const novedades = [
  { imagen: "/papeleria.svg", titulo: "Una etiqueta con tu sello", descripcion: "Una idea para el envoltorio: acompaña cada pedido con una etiqueta que lleve el nombre de tu emprendimiento.", fecha: "2026-11-12" },
  { imagen: "/regalo.svg", titulo: "Un regalo pensado para alguien", descripcion: "Un nombre, una fecha o una frase compartida pueden ser el punto de partida para un regalo personal.", fecha: "2026-11-05" },
];
export const productos = [];
export function cotizarCategoria(nombre) {
  return `${tienda.whatsapp}?text=${encodeURIComponent(`Hola, quiero cotizar productos de la categoría: ${nombre}`)}`;
}
export const horarios = [
  ["Lunes a viernes", "08:00 – 23:00"], ["Sábado", "Cerrado"], ["Domingo", "10:00 – 21:00"],
];
