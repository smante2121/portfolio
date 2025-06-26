import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sophia Mantegari",
  description: "Portfolio Website",
  icons: {
    icon: "../public/favicon.ico",

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Old+Standard+TT:wght@400;700&family=Poppins:wght@400;700&family=Playfair+Display:wght@400;700&family=Inter:wght@400;700&family=Lora:wght@400;700&family=Raleway:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Open+Sans:wght@400;700&family=Work+Sans:wght@400;700&family=Tinos:wght@400;700&family=Crimson+Pro:wght@400;700&family=Merriweather:wght@400;700&family=Cormorant+Garamond:wght@400;700&family=Libre+Baskerville:wght@400;700&family=PT+Serif:wght@400;700&family=Domine:wght@400;700&family=Source+Serif+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
         <link rel="icon" href="../public/favicon.ico"  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
