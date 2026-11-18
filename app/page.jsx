import Nav from "./Nav";
import Formulario from "./Formulario";
import { categorias, cotizarCategoria, horarios, novedades, tienda } from "../data/tienda";

const externo = { target: "_blank", rel: "noopener" };
const fechaCL = new Intl.DateTimeFormat("es-CL", { dateStyle: "long", timeZone: "UTC" });
function Rotulo({ num, children }) {
  return <p className="rotulo"><span>{num} /</span> {children}</p>;
}

export default function Inicio() {
  return <>
    <a className="saltar" href="#contenido">Saltar al contenido</a>
    <Nav />
    <main id="contenido">
      <section id="portada" className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="rotulo"><span className="raya" /> Taller familiar · Tomé, Chile</p>
            <h1>Regalos <em>Pewen.</em></h1>
            <p className="bajada">Regalos y artículos personalizados para celebrar a los tuyos o darle tu sello a un emprendimiento.</p>
            <div className="acciones"><a className="btn principal" href="#catalogo">Ver catálogo <span aria-hidden="true">↓</span></a>
              <a className="btn secundario" href={tienda.whatsapp} {...externo}>Escríbenos por WhatsApp ↗</a></div>
          </div>
          <figure className="lamina">
            <div className="lamina-meta"><span>Archivo del taller</span><span>N° 01</span></div>
            <div className="sello"><img src="/sello.webp" width="512" height="512" fetchPriority="high" alt="Logo de Regalos Pewen: dos araucarias negras sobre un círculo rosado" /></div>
            <figcaption className="lamina-meta"><span>Sello de la casa</span><span>Tomé / Biobío</span></figcaption>
          </figure>
        </div>
      </section>
      <section id="quienes-somos" className="wrap bloque dos">
        <div><Rotulo num="02">Quiénes somos</Rotulo><h2>Un taller de familia.</h2></div>
        <div><p>Somos un emprendimiento familiar de Tomé. Hacemos regalos y artículos personalizados para negocios, cumpleaños y ocasiones especiales. Nos cuentas tu idea y conversamos directamente contigo sobre los materiales y el diseño.</p>
          <aside className="servicio"><div><small>También en el taller</small><h3>Impresiones Pewen</h3></div><a href={tienda.impresiones} {...externo}>Ver Instagram ↗</a></aside></div>
      </section>
      <section id="novedades" className="franja"><div className="wrap bloque">
        <Rotulo num="03">Desde el taller</Rotulo><h2>Novedades</h2>
        {novedades.length ? <><p className="nota">Publicaciones de ejemplo · contenido editable.</p><div className="noticias">{novedades.map(n =>
          <article className="noticia" key={n.titulo}><img src={n.imagen} width="480" height="200" loading="lazy" alt="" /><div>
            <time dateTime={n.fecha}>{fechaCL.format(new Date(`${n.fecha}T12:00:00Z`))}</time>
            <h3>{n.titulo}</h3><p>{n.descripcion}</p></div></article>)}</div></> :
          <p>Pronto compartiremos nuevas ideas del taller. ¡Gracias por pasar!</p>}
      </div></section>
      <section id="catalogo" className="wrap bloque">
        <Rotulo num="04">Hecho a pedido</Rotulo><h2>Catálogo</h2><p className="nota">Elige una categoría y conversemos por WhatsApp. Cada pedido se cotiza contigo.</p>
        <div className="categorias">{categorias.map((c, i) => <article className="tarjeta" key={c.slug}>
          <img src={c.imagen} width="480" height="200" alt={c.alt} loading="lazy" />
          <div><small>Colección / 0{i + 1}</small><h3>{c.nombre}</h3><p>{c.incluye}</p>
            <a href={cotizarCategoria(c.nombre)} {...externo} aria-label={`Cotizar por WhatsApp: ${c.nombre}`}>Cotizar por WhatsApp ↗</a></div>
        </article>)}</div>
      </section>
      <section id="ubicacion" className="franja"><div className="wrap bloque dos">
        <div><Rotulo num="05">Ubicación y horarios</Rotulo><h2>Visítanos en Tomé.</h2>
          <address>{tienda.calle}, Tomé<br />Región del Biobío · CP 4160000</address><a className="btn secundario" href={tienda.mapa} {...externo}>Cómo llegar ↗</a></div>
        <table><caption>Horarios de atención</caption><tbody>{horarios.map(([dia, hora]) => <tr key={dia}><th scope="row">{dia}</th><td>{hora === "Cerrado" ? <strong>{hora}</strong> : hora}</td></tr>)}</tbody></table>
      </div></section>
      <section id="contacto" className="wrap bloque dos">
        <div><Rotulo num="06">Contacto</Rotulo><h2>Cuéntanos tu idea.</h2><p>Envíanos una consulta para cotizar. Si prefieres conversar, escríbenos directamente.</p>
          <div className="contactos"><a className="btn wa" href={tienda.whatsapp} {...externo}>WhatsApp · {tienda.telefono} ↗</a>
            <a href={`mailto:${tienda.correo}`} {...externo}>{tienda.correo}</a><a href={tienda.instagram} {...externo}>@regalos.pewen ↗</a></div></div>
        <Formulario />
      </section>
    </main>
    <footer><div className="wrap pie"><span>© {new Date().getFullYear()} Regalos Pewen</span><div><a href={tienda.instagram} {...externo}>Regalos Pewen ↗</a><a href={tienda.impresiones} {...externo}>Impresiones Pewen ↗</a></div></div></footer>
  </>;
}
