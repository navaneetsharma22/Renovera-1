import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://renovera.studio"),
  title: {
    template: "%s | Renovera",
    default: "Renovera | Luxury Home Renovation & Architecture Studio",
  },
  description: "Premium architecture, luxury home renovations, and bespoke interior design studio. We build extraordinary spaces tailored to your lifestyle.",
  keywords: ["Luxury Home Renovation", "Architecture Studio", "Interior Design", "Turnkey Construction", "Premium Renovations", "Architectural Design"],
  authors: [{ name: "Renovera Design Team" }],
  creator: "Renovera Studio",
  publisher: "Renovera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Renovera | Luxury Home Renovation & Architecture Studio",
    description: "Premium architecture, luxury home renovations, and bespoke interior design studio.",
    url: "https://renovera.studio",
    siteName: "Renovera Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/luxury-dusk-villa.png",
        width: 1200,
        height: 630,
        alt: "Renovera Luxury Villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovera | Luxury Architecture Studio",
    description: "Premium architecture and luxury home renovations.",
    creator: "@RenoveraStudio",
    images: ["/images/luxury-dusk-villa.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ClientLayout>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
