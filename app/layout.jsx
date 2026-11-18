export const metadata = {
  title: "Regalos Pewen",
  description: "Sitio de Regalos Pewen.",
};

export default function Layout({ children }) {
  return (
    <html lang="es-CL">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
