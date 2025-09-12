'use client';

import React, { useEffect, useMemo, useState } from 'react';

/**
 * Fibrayphone Landing (sin framer-motion)
 * - Client Component ("use client")
 * - Temporizador de oferta limitada (48h por defecto)
 * - CTA y botón flotante de WhatsApp
 * - Secciones: Hero, Ofertas, Beneficios, Servicios, Cómo funciona, Opiniones, Contacto, FAQ, Footer
 * - TailwindCSS
 */

// ========= Ajustes de negocio =========
const WHATSAPP = '34696785471'; // nº en formato internacional sin +
const EMAIL = 'fibrayphone@hotmail.com';
const ADDRESS = 'C/ Diego Serrano Nº13, Local, 14005';
const BRAND = {
  primary: '#55B7D6',
  dark: '#0f172a', // slate-900
  light: '#f8fafc', // slate-50
};

// ========= Utilidades =========
function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

// Hook de cuenta atrás (fecha objetivo en ms)
function useCountdown(target: number) {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const left = Math.max(0, target - now);
  const days = Math.floor(left / 86_400_000);
  const hours = Math.floor((left % 86_400_000) / 3_600_000);
  const minutes = Math.floor((left % 3_600_000) / 60_000);
  const seconds = Math.floor((left % 60_000) / 1_000);

  const pad = (n: number) => n.toString().padStart(2, '0');
  return { left, days, hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

// ========= Componentes menores =========
function Container({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={classNames('mx-auto w-full max-w-6xl px-4', className)}>{children}</div>;
}

function SectionTitle({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {overline && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{overline}</p>}
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
      {children}
    </span>
  );
}

// ========= Página =========
export default function Page() {
  // Fecha objetivo: 48h desde que se abre la página
  const target = useMemo(() => Date.now() + 48 * 60 * 60 * 1000, []);
  const { left, days, hours, minutes, seconds } = useCountdown(target);

  // Manejar envío del formulario (manda a WhatsApp con el mensaje precargado)
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = (data.get('nombre') as string) || '';
    const telefono = (data.get('telefono') as string) || '';
    const servicio = (data.get('servicio') as string) || 'Fibra + Móvil';
    const msg = encodeURIComponent(
      `Hola, soy ${nombre}. Me interesa ${servicio}. Mi teléfono es ${telefono}.`
    );
    const wa = `https://wa.me/${WHATSAPP}?text=${msg}`;
    window.open(wa, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Barra superior */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <Container className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl" style={{ backgroundColor: BRAND.primary }} />
              <div>
                <div className="text-lg font-extrabold leading-none">Fibrayphone</div>
                <div className="text-[11px] uppercase tracking-widest text-slate-500">Fibra · Móvil · Energía · Alarma</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              WhatsApp directo
            </a>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative border-b border-slate-200">
        <Container className="py-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Badge>🔥 Oferta limitada</Badge>
              <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
                Ahorra en <span style={{ color: BRAND.primary }}>Fibra + Móvil</span> y Luz
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                Consigue <strong>Fibra + Móvil desde 20 €/mes</strong> y <strong>tarifa fija de luz desde 0,11 €/kWh</strong>.
                Tramitación en minutos con asesor personal.
              </p>

              {/* Timer */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-rose-700">
                  {left > 0 ? (
                    <div className="flex items-baseline gap-2 font-semibold">
                      <span>Termina en:</span>
                      <span className="tabular-nums">{days}d</span>
                      <span className="tabular-nums">{hours}h</span>
                      <span className="tabular-nums">{minutes}m</span>
                      <span className="tabular-nums">{seconds}s</span>
                    </div>
                  ) : (
                    <span className="font-semibold">¡Oferta finalizada! Consulta disponibilidad.</span>
                  )}
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero la oferta limitada de Fibrayphone')}`}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-white font-semibold hover:opacity-90"
                >
                  Quiero mi oferta
                </a>
              </div>

              {/* Chips */}
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                <li className="rounded-full bg-slate-100 px-3 py-1">Alta y portabilidad</li>
                <li className="rounded-full bg-slate-100 px-3 py-1">Instalación rápida</li>
                <li className="rounded-full bg-slate-100 px-3 py-1">Asesor dedicado</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Solicita tu estudio gratuito</h3>
              <form onSubmit={onSubmit} className="grid gap-3">
                <input
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                />
                <input
                  name="telefono"
                  required
                  placeholder="Teléfono"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                />
                <select
                  name="servicio"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                >
                  <option>Fibra + Móvil</option>
                  <option>Luz</option>
                  <option>Gas</option>
                  <option>Alarma</option>
                </select>
                <button
                  type="submit"
                  className="mt-1 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90"
                >
                  Pedir información
                </button>
                <p className="text-xs text-slate-500">
                  También puedes escribirnos a <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* OFERTAS */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12">
          <SectionTitle overline="Ofertas" title="Promos que vuelan" subtitle="Aprovecha mientras dure" />
          <div className="grid gap-6 md:grid-cols-2">
            {/* Fibra + Móvil */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">Fibra + Móvil</h3>
                <Badge>🔥 Limitada</Badge>
              </div>
              <p className="text-slate-600">Velocidad estable y llamadas ilimitadas.</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black">20€</span>
                <span className="text-slate-600">/mes</span>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                <li>Instalación incluida</li>
                <li>Portabilidad sin cortes</li>
                <li>Soporte cercano</li>
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero la oferta de Fibra + Móvil desde 20€/mes')}`}
                className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                La quiero
              </a>
            </div>

            {/* Luz fija */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">Tarifa de Luz Fija</h3>
                <Badge>⚡ Limitada</Badge>
              </div>
              <p className="text-slate-600">Paga siempre lo mismo por kWh.</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black">0,11€</span>
                <span className="text-slate-600">/kWh</span>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                <li>Sin sustos ni tramos</li>
                <li>Gestión en minutos</li>
                <li>Estudio gratuito</li>
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero la oferta de luz fija desde 0,11€/kWh')}`}
                className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Quiero info
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* BENEFICIOS */}
      <section className="border-b border-slate-200">
        <Container className="py-12">
          <SectionTitle overline="Ventajas" title="Por qué Fibrayphone" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Ahorro real', 'Te buscamos la mejor oferta sin letra pequeña.'],
              ['Cercanía', 'Trato directo por WhatsApp o en tienda.'],
              ['Todo en uno', 'Fibra, Móvil, Luz, Gas y Alarma en un solo sitio.'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-lg font-bold">{t}</h4>
                <p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACTO */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-12">
          <SectionTitle overline="Contacto" title="Hablamos por WhatsApp" />
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Escríbenos ahora</h3>
              <p className="mt-2 text-slate-600">Resolvemos dudas y te activamos la oferta en minutos.</p>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="mt-4 inline-block rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Abrir WhatsApp
              </a>
              <ul className="mt-4 text-sm text-slate-600">
                <li><strong>Correo:</strong> <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><strong>Dirección:</strong> {ADDRESS}</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">Te llamamos nosotros</h3>
              <form onSubmit={onSubmit} className="grid gap-3">
                <input
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                />
                <input
                  name="telefono"
                  required
                  placeholder="Teléfono"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                />
                <button
                  type="submit"
                  className="mt-1 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90"
                >
                  Llamadme
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-100">
        <Container className="py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl" style={{ backgroundColor: BRAND.primary }} />
              <div>
                <div className="text-base font-bold">Fibrayphone</div>
                <div className="text-xs text-slate-300">Fibra · Móvil · Energía · Alarma</div>
              </div>
            </div>
            <div className="text-sm text-slate-300">
              {ADDRESS} · <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Fibrayphone. Todos los derechos reservados.</div>
        </Container>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        className="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: BRAND.primary }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.9 6.3L4 29l7.9-1.9C13.6 28.3 15.7 29 18 29c6.6 0 12-5.4 12-12S24.6 3 18 3h-2zM9.6 24.1l-.5.2.3-1.5-.9-1.3C7.3 20.1 7 18.6 7 17 7 11.5 11.5 7 17 7s10 4.5 10 10-4.5 10-10 10c-1.6 0-3.1-.3-4.5-1l-1.3-.7-1.6.8zM13 12.4c-.3-.6-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.3 1.2-1.3 2.9s1.3 3.4 1.5 3.6c.2.3 2.6 4.2 6.3 5.7 3.1 1.2 3.7 1 4.3.9.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.7.2-1.8-.1-.1-.2-.1-.4-.2s-1.2-.6-1.4-.6-.3 0-.5.2c-.1.3-.6 1-.7 1.2-.1.2-.3.2-.5.1s-1-.4-2-1.1c-.7-.5-1.3-1.5-1.5-1.7-.1-.2-.1-.3 0-.4.1-.1.2-.4.3-.5.1-.2.1-.3 0-.5-.1-.1-.5-1.3-.7-1.8-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5 0-.7.2-.2.3-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.9 3.1 4.7 4.3 1.6.9 2.8.8 3.2.7.5-.1 1.6-.6 1.8-1.3.2-.7.2-1.3.1-1.4-.1-.1-.2-.2-.4-.3-.2-.1-1.6-.8-1.8-.9-.2-.1-.4 0-.6.2-.2.3-.7 1-1 1.2-.2.2-.4.2-.6.1-.2-.1-1.2-.4-2.3-1.2-1.2-.8-2.2-2.5-2.4-2.7-.2-.3-.2-.6-.1-.7.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.1-.4-1.2-.8-1.7z" />
        </svg>
      </a>
    </div>
  );
}