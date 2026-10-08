import type { ReactNode } from 'react';

const WHATSAPP_URL =
  'https://wa.me/56967240923?text=Hola%2C%20me%20comunico%20desde%20el%20hub%20de%20Plus%20Gr%C3%A1fica.%20Quisiera%20cotizar.';

const TRACKING_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

const withTracking = (url: string) => {
  if (typeof window === 'undefined') return url;

  const destination = new URL(url);
  const current = new URLSearchParams(window.location.search);

  TRACKING_KEYS.forEach((key) => {
    const value = current.get(key);
    if (value) destination.searchParams.set(key, value);
  });

  return destination.toString();
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.78a4.85 4.85 0 01-1.07-.09z" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3z" />
  </svg>
);

const CatalogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.5h11.5A2.5 2.5 0 0119 7v12.5H7.5A2.5 2.5 0 015 17V4.5z" />
    <path strokeLinecap="round" d="M8 8h7M8 11.5h7M8 15h4" />
  </svg>
);

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@plus_grafica',
    url: 'https://www.instagram.com/plus_grafica/',
    icon: <InstagramIcon />,
    accent: 'from-[#f3c6f4] via-[#fbd0de] to-[#ffe0b5]',
    iconAccent: 'border-fuchsia-200 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-orange-500 text-white',
  },
  {
    name: 'Facebook',
    handle: 'Plusgraficachile',
    url: 'https://www.facebook.com/Plusgraficachile/',
    icon: <FacebookIcon />,
    accent: 'from-[#c2dcff] to-[#e2ecff]',
    iconAccent: 'border-blue-600 bg-[#1877f2] text-white',
  },
  {
    name: 'TikTok',
    handle: '@plus.grafica',
    url: 'https://www.tiktok.com/@plus.grafica',
    icon: <TikTokIcon />,
    accent: 'from-[#abe9ed] via-[#e7e7f4] to-[#f9c5d8]',
    iconAccent: 'border-zinc-800 bg-zinc-900 text-white shadow-[-2px_0_0_#25f4ee,2px_0_0_#fe2c55]',
  },
];

const ActionCard = ({
  href,
  icon,
  title,
  detail,
  tone,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  detail: string;
  tone: 'catalog' | 'web';
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group rounded-[22px] border p-4 text-left shadow-[0_16px_42px_rgba(24,24,27,0.07)] transition hover:-translate-y-0.5 hover:brightness-[1.03] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 ${tone === 'catalog' ? 'border-sky-300 bg-gradient-to-br from-[#b5e8fa] to-[#dcf3fc]' : 'border-blue-300 bg-gradient-to-br from-[#bfd5ff] to-[#e0e9ff]'}`}
  >
    <div className="mb-7 flex items-center justify-between">
      <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-white ${tone === 'catalog' ? 'border-sky-600 bg-sky-600' : 'border-blue-700 bg-blue-700'}`}>
        {icon}
      </span>
      <span className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-slate-900">
        <ArrowIcon />
      </span>
    </div>
    <span className="block text-[15px] font-semibold tracking-tight text-zinc-950">{title}</span>
    <span className="mt-1 block text-xs leading-5 text-slate-600">{detail}</span>
  </a>
);

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eceeef] px-5 py-8 text-zinc-950 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.24),transparent_64%)]" />
      <div className="pointer-events-none absolute -left-24 top-64 h-56 w-56 rounded-full bg-sky-400/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-cyan-300/[0.10] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[440px] flex-col">
        <header className="pb-8 pt-2 text-center">
          <img
            src="/logo.png"
            alt="Plus Gráfica"
            className="mx-auto mb-6 h-auto w-[220px] object-contain drop-shadow-[0_12px_30px_rgba(24,24,27,0.10)]"
          />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.35)]" />
            Proveedor gráfico B2B
          </div>

          <h1 className="text-[30px] font-semibold tracking-[-0.035em] text-zinc-950">Plus Gráfica</h1>
          <p className="mx-auto mt-2 max-w-sm text-[15px] leading-6 text-zinc-700">
            Señalética · Rotulación · Gráfica industrial
          </p>
          <p className="mt-1.5 text-xs text-zinc-500">Producción e instalación en terreno · Temuco</p>
        </header>

        <section aria-label="Contacto principal" className="space-y-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-between rounded-[24px] bg-[#25D366] px-5 py-4 text-[#07170d] shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#2adb6f] active:scale-[0.985]"
          >
            <span className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/10">
                <WhatsAppIcon />
              </span>
              <span className="text-left">
                <span className="block text-[16px] font-bold tracking-tight">Cotizar por WhatsApp</span>
                <span className="mt-0.5 block text-xs font-medium text-black/55">Contacto directo con Plus Gráfica</span>
              </span>
            </span>
            <span className="transition group-hover:translate-x-0.5">
              <ArrowIcon />
            </span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <ActionCard
              href={withTracking('https://catalogo.plusgrafica.cl/')}
              icon={<CatalogIcon />}
              title="Ver catálogo"
              detail="Productos y servicios"
              tone="catalog"
            />
            <ActionCard
              href={withTracking('https://www.plusgrafica.cl/')}
              icon={<WebIcon />}
              title="Sitio web"
              detail="plusgrafica.cl"
              tone="web"
            />
          </div>
        </section>

        <section aria-labelledby="redes-title" className="mt-8">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 id="redes-title" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Redes sociales
            </h2>
            <span className="text-[11px] text-zinc-500">Canales oficiales</span>
          </div>

          <div className="space-y-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between overflow-hidden rounded-[20px] border border-white/70 bg-white px-4 py-3.5 shadow-[0_10px_30px_rgba(24,24,27,0.045)] transition hover:-translate-y-0.5 hover:brightness-[1.03] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${link.accent}`} />
                <span className="relative flex items-center gap-3.5">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${link.iconAccent}`}>
                    {link.icon}
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-zinc-950">{link.name}</span>
                    <span className="mt-0.5 block text-xs text-slate-600">{link.handle}</span>
                  </span>
                </span>
                <span className="relative text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-slate-900">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="pb-3 pt-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Un solo enlace · Todos nuestros canales</p>
          <p className="mt-2 text-[11px] text-zinc-500">© {new Date().getFullYear()} Plus Gráfica SpA</p>
        </footer>
      </div>
    </main>
  );
}
