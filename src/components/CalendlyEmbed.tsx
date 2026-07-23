"use client";

import { InlineWidget } from "react-calendly";

export function CalendlyEmbed({ url }: { url: string }) {
  return (
    <div className="h-[650px] overflow-hidden rounded-card border border-border bg-surface sm:h-[700px]">
      <InlineWidget
        url={url}
        styles={{ height: "100%", width: "100%" }}
        pageSettings={{
          backgroundColor: "211a14",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "c7a76b",
          textColor: "f4e8d6",
        }}
      />
    </div>
  );
}
