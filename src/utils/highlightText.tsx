import React from "react";

export function highlightText(text: string, query?: string): React.ReactNode {
  if (!query?.trim()) return text;

  const words = query?.trim().split(/\s+/).filter(Boolean);

  if (!words.length) return text;

  const escapedWords = words.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");

  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark
        key={index}
        style={{
          backgroundColor: "#fff59d",
          padding: "0 2px",
        }}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}
