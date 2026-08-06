import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
import MatrixRain from "@/components/MatrixRain";
import FundoLDCODE from "@/components/FundoLDCODE";
import RedeParticulas from "@/components/RedeParticulas";
import Spotlight from "@/components/Spotlight";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import ChatFlutuante from "@/components/ChatFlutuante";

export const metadata: Metadata = {
  metadataBase: new URL("https://aonda.ldcodepro.com.br"),
  title: {
    default: "AONDA DIGITAL — Entre na Onda",
    template: "%s · AONDA DIGITAL",
  },
  description:
    "Você cuida dos seus clientes. Nós cuidamos da sua presença digital.",
  applicationName: "AONDA DIGITAL",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AONDA DIGITAL",
    title: "AONDA DIGITAL — Entre na Onda",
    description:
      "Você cuida dos seus clientes. Nós cuidamos da sua presença digital.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#050A14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        {/* Sem JS o navegador nunca dispara o IntersectionObserver, e os 39 blocos
            com opacity:0 ficariam invisíveis — a página inteira em branco.
            O <noscript> devolve tudo à vista nesse cenário.
            (O caso "JS ativo mas quebrado" é coberto no próprio Reveal, que
            revela na hora se o IntersectionObserver não existir.) */}
        {/* Aplica o tema salvo ANTES da primeira pintura. Sem isso a página
            pisca no tema errado antes do React montar. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('aonda-tema')||'system';var d=s==='dark'||(s==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';}catch(e){}})()`,
          }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
        <link rel="stylesheet" href="/wa-chat.css" />
      </head>
      <body>
        <FundoLDCODE />
        <div className="marcaDaguaFundo" aria-hidden="true" />
        <RedeParticulas />
        <MatrixRain />
        <CursorGlow />
        <Spotlight />
        <Header />
        {children}
        <ChatFlutuante />
        <script src="https://cdn.socket.io/4.7.5/socket.io.min.js" crossOrigin="anonymous" />
        <script src="/wa-chat.js" defer />
      </body>
    </html>
  );
}
