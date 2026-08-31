import { ImageResponse } from "next/og";
import { OgCard, ogContentType, ogSize } from "@/lib/og";

export const runtime = "edge";

export const alt =
  "Moses Simbeye — Software Engineer and IT Support, Lusaka, Zambia";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Portfolio"
        title="Moses Simbeye"
        subtitle="Software Engineer | Systems & IT Support — Lusaka, Zambia"
      />
    ),
    { ...size },
  );
}
