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
    <Nav />
    <main id="contenido" tabIndex={-1}>
      <section id="portada" className="hero">
        <div className="wrap hero-grid">
          <div>
            <Rotulo icono={Store}>Microempresa Familiar</Rotulo>
            <h1>Regalos <em>Pewen</em></h1>
            <p className="lema">Calidad en cada detalle, compromiso en cada entrega</p>
            <p className="bajada">Regalos, artículos personalizados y corporativos hechos con dedicación, comprometidos con la calidad</p>
            <div className="acciones"><a className="btn principal" href="#catalogo"><Icono nombre="regalo" />Ver catálogo</a>
              <a className="btn secundario" href={tienda.whatsapp} {...externo}><Icono nombre="chat" />Escríbenos por WhatsApp</a></div>
          </div>
          <figure className="lamina">
            <div className="sello"><img src="/sello.webp" width="512" height="512" fetchPriority="high" alt="Logo de Regalos Pewen: dos araucarias negras sobre un círculo rosado" /></div>
            <figcaption className="lamina-meta"><span>Sello de la casa</span><span className="puntos" aria-hidden="true" /><span>Tomé · Biobío</span></figcaption>
          </figure>
        </div>
      </section>
      <section id="quienes-somos" className="wrap bloque historia">
        <div className="historia-portada">
          <div>
            <Rotulo icono={HeartHandshake}>Quiénes somos</Rotulo><h2>Una microempresa familiar</h2>
            <p className="historia-entrada">Regalos Pewen es un emprendimiento familiar que renace del deseo de responder a las necesidades de las personas y empresas de Tomé, comuna que elegimos como nuestro hogar a comienzos de 2024.</p>
          </div>
          <figure className="lamina historia-retrato">
            <img src="/image/WhatsApp Image 2026-11-19 at 23.15.38.jpeg" width="640" height="640" loading="lazy" alt="Ilustración de la familia de Regalos Pewen en su taller de Tomé, junto a sus regalos personalizados" />
            <figcaption className="lamina-meta"><span>Regalos Pewen</span><span className="puntos" aria-hidden="true" /><span>Tomé · Biobío</span></figcaption>
          </figure>
        </div>
        <div className="historia-relato">
        <p>Somos parte de Universo Pewen, un proyecto que reúne nuestros tres emprendimientos familiares: Regalos Pewen, enfocado en la creación de productos y regalos personalizados; Impresiones Pewen, dedicado a la papelería y los servicios de impresión; y Püran Pewen, orientado al entretenimiento y la diversión familiar.</p>
        <p>En Regalos Pewen trabajamos para ofrecer soluciones personalizadas tanto a particulares como a empresas, adaptándonos a sus ideas, necesidades y proyectos.</p>
        <p>Creemos que cada cliente y cada proyecto merecen una atención especial. Por eso, ponemos dedicación en cada detalle, buscando entregar productos de calidad, un servicio responsable junto a una atención cercana y personalizada.</p>
        <p>Más que ofrecer productos, queremos construir relaciones de confianza, crecer junto a nuestra comunidad y ser parte de esos momentos y proyectos que son importantes para nuestros clientes.</p>
        <aside className="servicio"><div><h3>Síguenos en nuestras redes</h3>
          <div className="contactos">
            <a href={tienda.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Regalos Pewen"><Icono nombre="instagram" />@regalos.pewen</a>
            <a href={tienda.impresiones} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Impresiones Pewen"><Icono nombre="instagram" />@impresiones.pewen</a>
            <a href="https://www.instagram.com/puran.pewen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Püran Pewen"><Icono nombre="instagram" />@puran.pewen</a>
          </div>
        </div></aside>
        </div>
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
