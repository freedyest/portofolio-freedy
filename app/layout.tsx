import type { Metadata } from "next";

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Portofolio Freedy Estiawan",
  description:
    "Portfolio website of Freedy Estiawan — aspiring software developer and future remote engineer.",
  metadataBase: new URL(
    "https://portofolio-freedy-elvvk6acx-freedy-estiawans-projects.vercel.app"
  ),
  openGraph: {
    title: "Portofolio Freedy Estiawan",
    description:
      "Portfolio website of Freedy Estiawan — aspiring software developer and future remote engineer.",
    url: "https://portofolio-freedy-elvvk6acx-freedy-estiawans-projects.vercel.app",
    siteName: "Portofolio Freedy Estiawan",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview Portofolio Freedy Estiawan",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
