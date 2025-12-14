"use client";

import dynamic from "next/dynamic";

const VisualEditsMessenger = dynamic(
  () => import("../visual-edits/VisualEditsMessenger"),
  { ssr: false }
);

export default function VisualEditsWrapper() {
  return <VisualEditsMessenger />;
}
