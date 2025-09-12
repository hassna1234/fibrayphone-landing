import React from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  Zap,
  Wifi,
  Smartphone,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  MapPin,
  Mail,
} from "lucide-react";

// ✅ Componente React de una sola página (Tailwind)
// Datos reales de la marca
const BRAND = {
  name: "Fibrayphone",
  tagline:
    "Fibra, Móvil, Energía y Alarma — rápido, claro y sin coste para particulares",
  phone: "+34 696 78 54 71",
  whatsapp: "34696785471",
  email: "fibrayphone@hotmail.com",
  address: "C/ Diego Serrano Nº13, Local, 14005",
  color: "#39A9DC",
};

const features = [
  { icon: Wifi, title: "Fibra y Móvil", desc: "Ofertas actualizadas y portabilidades sin complicaciones." },
  { icon: Zap, title: "Luz y Gas", desc: "Tarifas competitivas y optimización según tu consumo real." },
  { icon: ShieldCheck, title: "Sin letra pequeña", desc: "Te explicamos condiciones, permanencias y costes reales." },
  { icon: Clock, title: "Rápido y sin estrés", desc: "Te proponemos la mejor opción en pocas horas." },
];

const steps = [
  { number: 1, title: "Cuéntanos tu situación", desc: "Completa el formulario o escríbenos por WhatsApp." },
  { number: 2, title: "Comparamos por ti", desc: "Analizamos opciones en principales operadores y comercializadoras." },
  { number: 3, title: "Contrata y ahorra", desc: "Te acompañamos en el alta y postventa, sin coste adicional." },
];

const faqs = [
  { q: "¿Cuánto cuesta el servicio?", a: "Para particulares suele ser 100% gratuito: cobramos a través de acuerdos con los proveedores. Para empresas, ofrecemos auditoría y propuesta a medida." },
  { q: "¿Con qué proveedores trabajáis?", a: "Con operadores y comercializadoras reconocidas en España. Siempre priorizamos la opción que mejor se ajuste a tus necesidades." },
  { q: "¿Tendré permanencia?", a: "Depende de la tarifa elegida. Te informamos claramente antes de contratar para que tomes la mejor decisión." },
  { q: "¿Cuánto tardo en tener el servicio activo?", a: "Portabilidades móviles suelen tardar 24–48h. Fibra y altas de luz/gas dependen del proveedor y la dirección." },
];

// Variables CSS para usar el color de marca con Tailwind arbitrario (bg-[var(--brand)])
const styleVars: CSSProperties = {
  ['--brand' as any]: BRAND.color,
  ['--brand-foreground' as any]: '#ffffff',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900" style={styleVars}>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[var(--brand)] text-white grid place-content-center font-bold">F</div>
            <div>
              <p className="font-semibold leading-tight">{BRAND.name}</p>
              <p className="text-xs text-slate-500">{BRAND.tagline}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href={`tel:${BRAND.phone}`} className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2"><Phone className="h-4 w-4"/> {BRAND.phone}</a>
            <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, vengo de la web y quiero información.")}`} className="ml-2" target="_blank" rel="noreferrer">
              <Button className="rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">WhatsApp</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, quiero una propuesta de ahorro en fibra/móvil y luz/gas.")}`} className="fixed bottom-5 right-5 z-50" target="_blank" rel="noreferrer">
        <Button size="lg" className="rounded-full shadow-xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">WhatsApp</Button>
      </a>

      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-[var(--brand)] rounded-full blur-3xl opacity-30" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight">
              Ahorra en tus facturas de <span className="underline decoration-8 decoration-[var(--brand)] underline-offset-8">fibra, móvil, luz y gas</span>
            </motion.h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Comparamos por ti y te acompañamos en todo el proceso. Transparente, rápido y sin complicaciones.
              <span className="font-medium text-slate-900"> Servicio sin coste para particulares</span>.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contacto"><Button size="lg" className="rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">Quiero una propuesta <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
              <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, vengo de la web y quiero información.")}`} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="rounded-2xl border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-foreground)]"><MessageSquare className="mr-2 h-4 w-4"/> Escríbenos por WhatsApp</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle className="h-4 w-4"/> Sin coste para particulares
              <CheckCircle className="h-4 w-4"/> Respuesta en 24h
              <CheckCircle className="h-4 w-4"/> Atención cercana
            </div>
          </div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.5}}>
            <Card className="rounded-3xl shadow-xl">
              <CardHeader><CardTitle>Calcula tu ahorro estimado</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-slate-600">Tipo de cliente</label>
                    <select className="mt-1 w-full border rounded-xl px-3 py-2">
                      <option>Particular</option>
                      <option>Autónomo</option>
                      <option>Empresa</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Servicios</label>
                    <select className="mt-1 w-full border rounded-xl px-3 py-2">
                      <option>Fibra + Móvil</option>
                      <option>Solo Móvil</option>
                      <option>Solo Fibra</option>
                      <option>Luz</option>
                      <option>Gas</option>
                      <option>Luz + Gas</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Pago actual (€/mes)</label>
                    <Input type="number" placeholder="Ej: 89" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Provincia</label>
                    <Input type="text" placeholder="Ej: Madrid" className="rounded-xl" />
                  </div>
                </div>
                <Button className="w-full rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">Ver estimación</Button>
                <p className="text-xs text-slate-500">*Estimación orientativa. Te enviaremos una propuesta real tras revisar tu caso.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-8 border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="h-6 w-6 text-[var(--brand)]"/>
              <div>
                <p className="font-medium">{f.title}</p>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16" id="servicios">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">¿Qué hacemos por ti?</h2>
            <p className="mt-2 text-slate-600">Comparamos ofertas reales, hablamos tu idioma y gestionamos el alta de forma integral.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl">
              <CardHeader><CardTitle className="flex items-center gap-2 text-[var(--brand)]"><Wifi className="h-5 w-5"/> Fibra + Móvil</CardTitle></CardHeader>
              <CardContent className="text-slate-600">Pack a medida, cobertura en tu zona y dispositivos si los necesitas.</CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader><CardTitle className="flex items-center gap-2 text-[var(--brand)]"><Smartphone className="h-5 w-5"/> Móvil</CardTitle></CardHeader>
              <CardContent className="text-slate-600">Portabilidades rápidas y tarifas sin sorpresas.</CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader><CardTitle className="flex items-center gap-2 text-[var(--brand)]"><Zap className="h-5 w-5"/> Luz y Gas</CardTitle></CardHeader>
              <CardContent className="text-slate-600">Ajuste de potencia, discriminación horaria y revisión de términos.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white" id="como-funciona">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">¿Cómo funciona?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <Card key={s.number} className="rounded-3xl">
                <CardHeader>
                  <CardTitle>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-white mr-2">{s.number}</span>
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16" id="opiniones">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Lo que dicen nuestros clientes</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="pt-6 text-slate-700">
                  “Me tramitaron fibra y móvil en el mismo día y ahora pago menos que antes.”
                  <div className="mt-4 text-sm text-slate-500">— Cliente verificado</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / VALUE PROP */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Tu ahorro, nuestra prioridad</h2>
            <p className="mt-2 text-slate-600">Para particulares: servicio sin coste. Para empresas: auditoría energética/telecom con propuesta a medida.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5 text-[var(--brand)]"/> Revisión de facturas para detectar sobrecostes</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5 text-[var(--brand)]"/> Negociación y portabilidades asistidas</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5 text-[var(--brand)]"/> Seguimiento postventa</li>
            </ul>
          </div>
          <Card className="rounded-3xl">
            <CardHeader><CardTitle>Plan Empresa</CardTitle></CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-3">Incluye auditoría de líneas y energía, consolidación de proveedores y propuesta de ahorro.</p>
              <p className="text-sm text-slate-500">Solicita presupuesto según número de sedes y líneas.</p>
              <a href="#contacto"><Button className="mt-4 rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">Solicitar estudio</Button></a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20" id="contacto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Pide tu propuesta gratuita</h2>
            <p className="mt-2 text-slate-600">Déjanos tus datos y te contactamos en menos de 24h laborales.</p>
          </div>

          <Card className="mt-8 rounded-3xl">
            <CardContent className="pt-6">
              <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactamos en menos de 24h.'); }}>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-sm text-slate-600">Nombre</label>
                  <Input placeholder="Tu nombre" className="rounded-xl mt-1"/>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-sm text-slate-600">Teléfono</label>
                  <Input placeholder="Tu número" className="rounded-xl mt-1"/>
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-slate-600">Email</label>
                  <Input type="email" placeholder="tu@email.com" className="rounded-xl mt-1"/>
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-slate-600">¿Qué necesitas?</label>
                  <Textarea placeholder="Cuéntanos: fibra/móvil, luz, gas, empresa…" className="rounded-xl mt-1" rows={4}/>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acepto" />
                  <label htmlFor="acepto" className="text-sm text-slate-600">Acepto ser contactad@ y la <a href="#legal" className="underline">política de privacidad</a>.</label>
                </div>
                {/* Honeypot */}
                <input type="text" name="empresa" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="col-span-2 flex flex-wrap gap-3">
                  <Button className="rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">Solicitar propuesta</Button>
                  <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, vengo de la web y quiero información.")}`} target="_blank" rel="noreferrer">
                    <Button className="rounded-2xl" variant="outline"><MessageSquare className="mr-2 h-4 w-4"/> WhatsApp</Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {faqs.map((item, idx) => (
              <Card key={idx} className="rounded-3xl">
                <CardHeader><CardTitle>{item.q}</CardTitle></CardHeader>
                <CardContent className="text-slate-700">{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-slate-50" id="legal">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-slate-900">{BRAND.name}</p>
            <p>{BRAND.tagline}</p>
            <div className="mt-3 space-y-1">
              <a className="flex items-center gap-2" href={`tel:${BRAND.phone}`}><Phone className="h-4 w-4"/> {BRAND.phone}</a>
              <a className="flex items-center gap-2" href={`mailto:${BRAND.email}`}><Mail className="h-4 w-4"/> {BRAND.email}</a>
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5"/><span>{BRAND.address}</span></div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Legal</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="underline">Aviso legal</a></li>
              <li><a href="#" className="underline">Política de privacidad</a></li>
              <li><a href="#" className="underline">Política de cookies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Atención</p>
            <p className="mt-2">Lunes a Viernes, 9:00–19:00</p>
            <div className="mt-2 flex gap-2">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, vengo de la web y quiero información.")}`} target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-2xl">WhatsApp</Button>
              </a>
              <a href="#contacto">
                <Button className="rounded-2xl bg-[var(--brand)] text-[var(--brand-foreground)] hover:opacity-90">Contacto</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 text-xs text-slate-500">© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
