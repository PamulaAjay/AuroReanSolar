// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/Header";

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("aurorean-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = savedTheme || preferredTheme;
  } catch (_) {
    document.documentElement.dataset.theme = "light";
  }
`;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-poppins",          // custom CSS variable
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auroreansolar.com"),

  title: {
    default: "Aurorean Solar | Solar Energy Solutions",
    template: "%s | Aurorean Solar",
  },

  description:
    "Aurorean Solar provides reliable solar energy solutions for residential, commercial, and industrial customers.",

  applicationName: "Aurorean Solar",

  authors: [
    {
      name: "Aurorean Solar",
      url: "https://auroreansolar.com",
    },
  ],

  creator: "Aurorean Solar",
  publisher: "Aurorean Solar",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://auroreansolar.com",
    siteName: "Aurorean Solar",
    title: "Aurorean Solar | Solar Energy Solutions",
    description:
      "Aurorean Solar provides reliable solar energy solutions for residential, commercial, and industrial customers.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aurorean Solar | Solar Energy Solutions",
    description:
      "Aurorean Solar provides reliable solar energy solutions for residential, commercial, and industrial customers.",
  },

  icons: {
    icon: "/AuroReanSolar.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
