import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#211a14",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#e0c99a",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#f4e8d6",
            maxWidth: 980,
          }}
        >
          Crecimiento real. Sin promesas falsas.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#c7b49c",
            marginTop: 32,
            maxWidth: 860,
          }}
        >
          Aprende a construir ingresos adicionales en la nueva economía, con
          criterio y sin humo.
        </div>
      </div>
    ),
    { ...size },
  );
}
