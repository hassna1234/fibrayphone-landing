
# Fibrayphone Landing

Proyecto Next.js con Tailwind y componentes UI mínimos (sin shadcn) para desplegar en Vercel.

## Requisitos
- Node.js 18+

## Uso
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000`.

## Despliegue en Vercel
1. Crea un repo en GitHub y sube el proyecto.
2. Importa el repo en Vercel → Deploy.
3. En Settings → Domains añade tu dominio y crea los DNS:
   - CNAME `www` → `cname.vercel-dns.com`
   - A `@` → `76.76.21.21`
