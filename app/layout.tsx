
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fibrayphone — Ahorra en fibra, móvil, luz y gas",
  description: "Comparamos por ti y te acompañamos en todo el proceso. Servicio sin coste para particulares.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
