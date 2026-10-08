import { ImageResponse } from "next/og";

// Route segment config
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #9333ea 100%)",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
