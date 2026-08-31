import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icons must be raster, so this mirrors app/icon.svg as a PNG.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          color: "#D4502A",
          fontSize: 88,
          fontWeight: 700,
        }}
      >
        MS
      </div>
    ),
    { ...size },
  );
}
