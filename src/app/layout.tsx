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
  title: "AuroRean Solar",
  description: "Solar energy solutions from AuroRean Solar",
  icons: {
    icon: "/favicon.ico",
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
