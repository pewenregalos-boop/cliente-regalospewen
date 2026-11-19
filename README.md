# Regalos Pewen

Sitio de una microempresa familiar en Tomé. Abre en Portada y muestra una sección a la vez, con un índice lateral en escritorio y un menú superior en móvil. Los enlaces directos como `/#catalogo` abren la sección correspondiente.
No incluye cuentas, carrito, base de datos ni panel de administración.
Los contactos, horarios, categorías y publicaciones se editan en [data/tienda.js](./data/tienda.js).
Las dos novedades son ejemplos editoriales; si se vacía la lista se muestra un aviso.
El logo, favicon y sello WebP vienen del kit del negocio. Las ilustraciones SVG son reemplazables por fotografías.

**Desarrollo:** con Node.js 24 y pnpm 9.15.9, ejecuta `pnpm install --frozen-lockfile`
y `pnpm dev`. Abre <http://localhost:3000>.

**Despliegue:** conecta este repositorio en Cloudflare Workers Builds al Worker
`cliente-regalospewen` con estos ajustes:

| Ajuste | Valor |
| --- | --- |
| Rama de producción | `main` |
| Directorio raíz | `/` |
| Comando de compilación | `pnpm run build:worker` |
| Comando de despliegue | `pnpm run deploy` |

Una vez conectado, Cloudflare publica los pushes a `main` en `workers.dev`.
GitHub Actions solo valida la compilación, sin credenciales de Cloudflare.
Para probar el paquete sin publicar: `pnpm run build:worker` y `pnpm run preview`.

**Correo de cotizaciones (requisito de producción).** Habilita el envío de correo en
la cuenta Cloudflare y verifica `pewenregalos@gmail.com` como destino autorizado
antes de desplegar el binding `CORREO` declarado en [wrangler.jsonc](./wrangler.jsonc).
Configura `CORREO_REMITENTE` como secreto del Worker (`pnpm exec wrangler secret put CORREO_REMITENTE`):
su valor debe ser una dirección de un dominio propio autorizado para enviar, no el Gmail de destino.
El formulario valida en servidor, descarta el campo trampa y solo confirma cuando
el proveedor acepta el correo. No persiste consultas ni registra su contenido.
Tras configurar el remitente, comprueba la recepción enviando una cotización de prueba.