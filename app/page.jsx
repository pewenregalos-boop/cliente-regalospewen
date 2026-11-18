import Nav from "./Nav";
import Icono from "./Icono";
import { Store, HeartHandshake, Newspaper, Gift, MapPin, MessagesSquare } from "lucide-react";
import Formulario from "./Formulario";
import { categorias, cotizarCategoria, horarios, novedades, tienda } from "../data/tienda";

const externo = { target: "_blank", rel: "noopener" };
const fechaCL = new Intl.DateTimeFormat("es-CL", { dateStyle: "long", timeZone: "UTC" });
function Rotulo({ icono: Ilustracion, children }) {
  return <p className="rotulo"><Ilustracion size={22} strokeWidth={1.7} aria-hidden="true" />{children}<span className="puntos" aria-hidden="true" /></p>;
}

export default function Inicio() {
  return <>
    <a className="saltar" href="#contenido">Saltar al contenido</a>
    <Nav />
    <main id="contenido">
      <section id="portada" className="hero">
        <div className="wrap hero-grid">
          <div>
            <Rotulo icono={Store}>Taller familiar · Tomé, Chile</Rotulo>
            <h1>Regalos <em>Pewen.</em></h1>
            <p className="bajada">Regalos y artículos personalizados para celebrar a los tuyos o darle tu sello a un emprendimiento.</p>
            <div className="acciones"><a className="btn principal" href="#catalogo"><Icono nombre="regalo" />Ver catálogo</a>
              <a className="btn secundario" href={tienda.whatsapp} {...externo}><Icono nombre="chat" />Escríbenos por WhatsApp</a></div>
          </div>
          <figure className="lamina">
            <div className="sello"><img src="/sello.webp" width="512" height="512" fetchPriority="high" alt="Logo de Regalos Pewen: dos araucarias negras sobre un círculo rosado" /></div>
            <figcaption className="lamina-meta"><span>Sello de la casa</span><span className="puntos" aria-hidden="true" /><span>Tomé · Biobío</span></figcaption>
          </figure>
        </div>
      </section>
      <section id="quienes-somos" className="wrap bloque dos">
        <div><Rotulo icono={HeartHandshake}>Quiénes somos</Rotulo><h2>Un taller de familia.</h2></div>
        <div><p>Somos un emprendimiento familiar de Tomé. Hacemos regalos y artículos personalizados para negocios, cumpleaños y ocasiones especiales. Nos cuentas tu idea y conversamos directamente contigo sobre los materiales y el diseño.</p>
          <aside className="servicio"><div><small>También en el taller</small><h3>Impresiones Pewen</h3></div><a href={tienda.impresiones} {...externo}><Icono nombre="instagram" />Ver Instagram</a></aside></div>
      </section>
      <section id="novedades" className="franja"><div className="wrap bloque">
        <Rotulo icono={Newspaper}>Desde el taller</Rotulo><h2>Novedades</h2>
        {novedades.length ? <><p className="nota">Publicaciones de ejemplo · contenido editable.</p><div className="noticias">{novedades.map(n =>
          <article className="noticia" key={n.titulo}><img src={n.imagen} width="480" height="200" loading="lazy" alt="" /><div>
            <time dateTime={n.fecha}>{fechaCL.format(new Date(`${n.fecha}T12:00:00Z`))}</time>
            <h3>{n.titulo}</h3><p>{n.descripcion}</p></div></article>)}</div></> :
          <p>Pronto compartiremos nuevas ideas del taller. ¡Gracias por pasar!</p>}
      </div></section>
      <section id="catalogo" className="wrap bloque">
        <Rotulo icono={Gift}>Hecho a pedido</Rotulo><h2>Catálogo</h2><p className="nota">Elige una categoría y conversemos por WhatsApp. Cada pedido se cotiza contigo.</p>
        <div className="categorias">{categorias.map(c => <article className="tarjeta" key={c.slug}>
          <img src={c.imagen} width="480" height="200" alt={c.alt} loading="lazy" />
          <div><h3>{c.nombre}</h3><p>{c.incluye}</p>
            <a href={cotizarCategoria(c.nombre)} {...externo} aria-label={`Cotizar por WhatsApp: ${c.nombre}`}><Icono nombre="chat" />Cotizar por WhatsApp</a></div>
        </article>)}</div>
      </section>
      <section id="ubicacion" className="franja"><div className="wrap bloque dos">
        <div><Rotulo icono={MapPin}>Ubicación y horarios</Rotulo><h2>Visítanos en Tomé.</h2>
          <address>{tienda.calle}, Tomé<br />Región del Biobío · CP 4160000</address><a className="btn secundario" href={tienda.mapa} {...externo}><Icono nombre="pin" />Cómo llegar</a></div>
        <table><caption>Horarios de atención</caption><tbody>{horarios.map(([dia, hora]) => <tr key={dia}><th scope="row">{dia}</th><td>{hora === "Cerrado" ? <strong>{hora}</strong> : hora}</td></tr>)}</tbody></table>
      </div></section>
      <section id="contacto" className="wrap bloque dos">
        <div><Rotulo icono={MessagesSquare}>Contacto</Rotulo><h2>Cuéntanos tu idea.</h2><p>Envíanos una consulta para cotizar. Si prefieres conversar, escríbenos directamente.</p>
          <div className="contactos"><a className="btn wa" href={tienda.whatsapp} {...externo}><Icono nombre="chat" />WhatsApp · {tienda.telefono}</a>
            <a href={`mailto:${tienda.correo}`} {...externo}><Icono nombre="correo" />{tienda.correo}</a><a href={tienda.instagram} {...externo}><Icono nombre="instagram" />@regalos.pewen</a></div></div>
        <Formulario />
      </section>
    </main>
    <footer><div className="wrap pie"><span>© {new Date().getFullYear()} Regalos Pewen</span><div><a href={tienda.instagram} {...externo}>Regalos Pewen ↗</a><a href={tienda.impresiones} {...externo}>Impresiones Pewen ↗</a></div></div></footer>
  </>;
}
