# Regalos Pewen

Plantilla mínima de Next.js con una portada en [app/page.jsx](./app/page.jsx).

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