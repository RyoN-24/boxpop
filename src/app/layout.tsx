import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BOX POP | Productos para Bebés y Niños en Perú",
  description: "Tienda online de productos de calidad para bebés y niños. Ropa, juguetes didácticos, pañaleras y boxes curados por edad. Envío a todo Perú. Paga con Yape, Plin o transferencia.",
  keywords: ["bebés", "niños", "ropa de bebé", "juguetes didácticos", "pañaleras", "Perú", "tienda online"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "BOX POP | Todo para tu Bebé",
    description: "Productos de calidad para bebés y niños. Boxes curados por edad, envío nacional.",
    type: "website",
    locale: "es_PE",
    siteName: "BOX POP",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOX POP | Productos para Bebés",
    description: "Tienda online de productos de calidad para bebés y niños en Perú.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
