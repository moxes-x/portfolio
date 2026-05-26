import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const themeScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = storedTheme || (prefersLight ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://mosessimbeye.dev"),
  title: "Moses Simbeye | Full-Stack Software Developer",
  description:
    "Portfolio of Moses Simbeye, a Full-Stack Software Developer based in Lusaka, Zambia.",
  openGraph: {
    title: "Moses Simbeye | Full-Stack Software Developer",
    description:
      "Production systems, client websites, and full-stack development work by Moses Simbeye.",
    type: "website",
    url: "https://mosessimbeye.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moses Simbeye | Full-Stack Software Developer",
    description:
      "Full-stack software developer based in Lusaka, Zambia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfair.variable} ${jetBrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-dark text-light">{children}</body>
    </html>
  );
}
