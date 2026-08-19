import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://moses-simbeye.vercel.app"),
  title: "Moses Simbeye | Software Developer & IT Support",
  description:
    "Portfolio of Moses Simbeye, a software developer and IT support professional based in Lusaka, Zambia.",
  applicationName: "Moses Simbeye Portfolio",
  keywords: [
    "Moses Simbeye",
    "software developer Lusaka",
    "web developer Zambia",
    "Laravel developer",
    "Next.js developer",
    "IT support Zambia",
  ],
  authors: [{ name: "Moses Simbeye", url: "https://moses-simbeye.vercel.app" }],
  creator: "Moses Simbeye",
  publisher: "Moses Simbeye",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Moses Simbeye | Software Developer & IT Support",
    description:
      "Production systems, client websites, and IT support work by Moses Simbeye.",
    type: "website",
    url: "https://moses-simbeye.vercel.app",
    siteName: "Moses Simbeye Portfolio",
    locale: "en_ZM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moses Simbeye | Software Developer & IT Support",
    description:
      "Software developer and IT support professional based in Lusaka, Zambia.",
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
        <meta
          name="google-site-verification"
          content="b6aAUxy2w806G0zeBm4G_w0JoPS0nBmVpZUKcfcORyQ"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GFZCLX0WQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GFZCLX0WQ');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y4rx7n5fnp");
          `}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-dark text-light">{children}</body>
    </html>
  );
}
