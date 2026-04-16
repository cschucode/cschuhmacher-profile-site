import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Chris Schuhmacher - Senior Frontend / Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read headshot from public folder
  const headshot = await readFile(join(process.cwd(), "public", "headshot.jpg"));
  const headshotBase64 = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          padding: "60px",
          gap: "60px",
        }}
      >
        {/* Headshot */}
        <div
          style={{
            display: "flex",
            width: "280px",
            height: "280px",
            borderRadius: "24px",
            overflow: "hidden",
            border: "4px solid #374151",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={headshotBase64}
            alt="Chris Schuhmacher"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#60a5fa",
              marginBottom: "12px",
              fontWeight: 500,
            }}
          >
            chrisschuhmacher.com
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Chris Schuhmacher
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#9ca3af",
              lineHeight: 1.4,
            }}
          >
            Senior Frontend / Product Engineer
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#6b7280",
              marginTop: "20px",
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            Big tech experience, mission-driven focus.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
