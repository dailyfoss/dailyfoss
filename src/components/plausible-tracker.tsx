"use client";

import { Suspense } from "react";
import { usePlausiblePageview } from "@/hooks/use-plausible-pageview";

function PlausibleTrackerInner() {
  usePlausiblePageview();
  return null;
}

export function PlausibleTracker() {
  return (
    <Suspense fallback={null}>
      <PlausibleTrackerInner />
    </Suspense>
  );
}
