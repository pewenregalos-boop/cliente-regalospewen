import "./estilo.css";
import { headers } from "next/headers";
import { tienda } from "../data/tienda";

export async function generateMetadata() {
  const host = (await headers()).get("host");
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${host?.startsWith("localhost") ? "http" : "https"}://${host}`;
  const title = "Regalos Pewen | Regalos personalizados en Tomé";
  const description = "Taller familiar en Tomé, Biobío. Regalos personalizados, papelería para emprendimientos y detalles para cumpleaños. Cotiza directamente con la tienda.";
  return {
    metadataBase: new URL(base), title, description,
    icons: { icon: "/regalos-pewen-logo-favicon/favicon/favicon.ico", apple: "/regalos-pewen-logo-favicon/favicon/apple-touch-icon.png" },
    openGraph: { type: "website", locale: "es_CL", title, description, siteName: tienda.nombre, images: [{ url: "/regalos-pewen-logo-favicon/logo-regalos-pewen-512.png", width: 512, height: 512, alt: "Regalos Pewen, Tomé" }] },
  };
}

export default function Layout({ children }) {
  return (
    <html lang="es-CL">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "GiftShop", name: tienda.nombre, telephone: tienda.telefono, email: tienda.correo,
          address: { "@type": "PostalAddress", streetAddress: tienda.calle, addressLocality: "Tomé", addressRegion: "Biobío", postalCode: "4160000", addressCountry: "CL" },
          hasMap: tienda.mapa, sameAs: [tienda.instagram], openingHours: ["Mo-Fr 08:00-23:00", "Su 10:00-21:00"],
        }) }} />
        {children}
      </body>
    </html>
  );
}
