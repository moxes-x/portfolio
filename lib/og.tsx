export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export const siteUrl = "https://moses-simbeye.vercel.app";
export const siteHost = "moses-simbeye.vercel.app";

const coral = "#D4502A";
const dark = "#0D0D0D";
const light = "#F5F5F0";
const secondary = "#A0A0A0";

// Satori requires an explicit `display: flex` on every element with children,
// and supports only a subset of CSS, so these styles stay deliberately plain.
export function OgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: dark,
        borderTop: `18px solid ${coral}`,
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, color: coral }}>
          {eyebrow.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: title.length > 26 ? 68 : 88,
            fontWeight: 700,
            lineHeight: 1.05,
            color: light,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.4,
            color: secondary,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 68,
            height: 68,
            backgroundColor: coral,
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          MS
        </div>
        <div style={{ display: "flex", fontSize: 26, color: secondary }}>{siteHost}</div>
      </div>
    </div>
  );
}