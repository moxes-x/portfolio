import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moses Simbeye | Software Engineer & IT Support",
    short_name: "Moses Simbeye",
    description:
      "Portfolio of Moses Simbeye, a software engineer and IT support professional based in Lusaka, Zambia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
