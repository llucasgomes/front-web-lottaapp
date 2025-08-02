import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: {
    default: 'Lottapp | Rastreamento de Micro-ônibus em Tempo Real',
    template: '%s | Lottapp',
  },
  description:
    'Acompanhe micro-ônibus em tempo real com o Lottapp. Solução ideal para motoristas e passageiros com mapa interativo, autenticação segura e atualizações via WebSocket.',
  keywords: [
    'Lottapp',
    'rastreamento',
    'micro-ônibus',
    'tempo real',
    'mapa ao vivo',
    'transporte urbano',
    'motoristas',
    'mapbox',
    'clerk auth',
    'websocket',
    'Next.js',
  ],
  metadataBase: new URL('https://web-lotta-app.vercel.app/'), // Altere para seu domínio real
  openGraph: {
    title: 'Lottapp | Rastreamento de Micro-ônibus em Tempo Real',
    description:
      'Veja sua localização e de outros veículos em tempo real com o Lottapp. Aplicação moderna com mapa interativo e autenticação segura.',
    url: 'https://web-lotta-app.vercel.app/',
    siteName: 'Lottapp',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://web-lotta-app.vercel.app/og-image.jpg', // coloque uma imagem OG real aqui
        width: 1200,
        height: 630,
        alt: 'Lottapp - Mapa em tempo real de micro-ônibus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lottapp | Rastreamento de Micro-ônibus em Tempo Real',
    description:
      'Visualize micro-ônibus ao vivo com o Lottapp. Mapa interativo e localização via WebSocket com autenticação moderna.',
    images: ['https://web-lotta-app.vercel.app/og-image.jpg'], // mesma imagem do OpenGraph
    creator: '@lottapp_oficial',
  },
  authors: [{ name: 'Lucas Gomes', url: 'https://llucasgomes-dev.vercel.app/' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
